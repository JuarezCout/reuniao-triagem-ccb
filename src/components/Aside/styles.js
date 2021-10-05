import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: #d3d3d3;
  padding-left: 5px;

  @media only screen and (max-width: 768px) {
    width: 60px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100px;

  

  img {
    margin-left: 20px;
    width: 200px;
    height: auto;
  }

  span {
    margin-left: 10px;
  }

  @media only screen and (max-width: 768px) {

    
  height: 70px;
    img {      
      margin-left: 0px;
      width: 50px;
      height: 50px;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  margin-top: 50px;

  * {
      margin: 0;
      font-family: "Roboto", sans-serif;
    }

    .sidebar {
      width: 100vh;
      height: 100vh;
      color: #fffff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .sidebar-center,
    .sidebar-bottom {
      display: flex;
      align-items: center;
      width: 95%;
      padding: 10px 0;
      margin-bottom: 10px;
    }

    .sidebar-center {
      padding: 0;
    }

    .list {
      list-style: none;
      padding: 0;
      width: 100%;
    }

    .list-item {
      margin-bottom: 15px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      padding: 10px;
      border-radius: 5px;
    }

    .list-item-icon {
      width: 30px;
      font-size: 20px;
    }

    .list-item-text {
      margin-left: 5px;
    }

    .list-item.active,
    .list-item:hover {
      background-color: #374151;
      color: white;
    }

    .color-box {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #9ca3af;
      margin-right: 15px;
      cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
      
      margin-top: 10px;

      .sidebar {
        width: 50px;
      }
      .brand,
      .list-item-text {
        display: none;
      }
    }
`;
