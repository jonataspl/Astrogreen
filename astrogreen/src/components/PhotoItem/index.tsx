import * as C from "./styles";

type Props = {
  url: string;
  name: string;
};

export const PhotoItem = ({ url, name }: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      {/* {name} */}
      <C.Remove>
        <input type="submit" value="Remover" />
      </C.Remove>
    </C.Container>
  );
};
