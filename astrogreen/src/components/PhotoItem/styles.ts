import styled from "styled-components";

export const Container = styled.div`
  background-color: #38393e;
  border-radius: 10px;
  padding: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    height: 100px;
    display: block;
    object-fit: contain;
    margin-bottom: 30px;
    border-radius: 10px;
  }
`;

export const Remove = styled.div`
  button {
    background-color: #e3403b;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 8px;
    display: inline-block;
    &:hover {
      opacity: 0.8;
    }
  }
`;
