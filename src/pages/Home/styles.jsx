import styled from "styled-components";

export const CardContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Card = styled.div`
  width: 200px;
  margin: 0 20px;
  cursor: pointer;
  .card-img {
    background-image: url("${(props) => props.img}");
    // object-fit: cover;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 250px;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: #fff;
      text-transform: uppercase;
      font-size: 2em;
    }
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }
`;
