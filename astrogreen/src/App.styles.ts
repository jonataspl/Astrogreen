import styled from "styled-components";

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
  .title {
    font-style: italic;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 70px;
  }
  .yourphotos {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 35px;
  }
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

export const UploadForm = styled.form`
  background-color: #38393e;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  input[type="submit"] {
    background-color: #3d51c8;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
