import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { v4 as createId } from "uuid";

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "UploadImages");
  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);
    list.push({
      name: photoList.items[i].name,
      fullPath: photoList.items[i].fullPath,
      url: photoUrl,
    });
  }

  return list;
};

export async function insert(file: File) {
  if (
    ["image/jpeg", "image/jpg", "image/png", "image/GIF"].includes(file.type)
  ) {
    let randomName = createId();
    let newFile = ref(storage, `UploadImages/${randomName}`);

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photoUrl,
    } as Photo;
  } else {
    return new Error("Tipo de arquivo não permitido.");
  }
}

export async function removeImage(photo: Photo) {
  const photoRef = ref(storage, photo.fullPath);
  await deleteObject(photoRef);
}
