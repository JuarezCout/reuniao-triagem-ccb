import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  padding-left: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    margin-left: 10px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;
