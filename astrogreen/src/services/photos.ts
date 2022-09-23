import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId } from "uuid";

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "UploadImages");
  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};

export const insert = async (file: File) => {
  if (
    ["image.jpeg", "image/jpg", "image/png", "image/GIF"].includes(file.type)
  ) {
    let newFile = ref(storage, `UploadImages`);

    let upload = await uploadBytes();
  } else {
    return new Error("Tipo de arquivo não permitido.");
  }
};
