import { Photo } from "../../types/Photo";
import * as C from "./styles";
import * as Photos from "../../services/photos";

type Props = {
  photo: Photo;
};

export function removeEl() {
  Photos.removeImage;
}

export const PhotoItem = ({ photo }: Props) => {
  return (
    <C.Container>
      <img src={photo.url} alt={photo.name} />
      {/* {name} */}
      <C.Remove onClick={removeEl}>
        <button id="botao">Remover</button>
      </C.Remove>
    </C.Container>
  );
};
