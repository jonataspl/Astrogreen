import { Photo } from "../../types/Photo";
import * as C from "./styles";
import * as Photos from "../../services/photos";

type Props = {
  photo: Photo;
};

export function botao(photo: Photo) {
  return Photos.removeImage(photo);
}

const handleClick = () => {
  alert("Teste");
};
// export function removeEl() {
//   return botao.addEventListener('click', function(){})
// }

export const PhotoItem = (props: Props) => {
  return (
    <C.Container>
      <img src={props.photo.url} alt={props.photo.name} />
      {props.photo.name}
      <C.Remove>
        <button
          id="botao"
          onClick={() => {
            botao(props.photo);
            // return handleClick;
          }}
        >
          Remover
        </button>
      </C.Remove>
    </C.Container>
  );
};
