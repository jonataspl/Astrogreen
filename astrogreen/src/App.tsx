import { useState, useEffect } from "react";
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de fots</C.Header>

        {/* Upload Images */}
        {loading && (
          <C.ScreenWarning>
            <div className="emoji">🧙‍♂️</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;
