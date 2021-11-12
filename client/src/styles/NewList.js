import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  
  margin-left: 50px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .btn {
    background-color: #30503A;
    margin-left: 30px;
  }

  .table{
    tbody{
      border-spacing: 20px;
      border-collapse: separate;

      td {
        vertical-align: middle;
        border-bottom-width: 30px;
        background: #d4d9e2;
        border-color: #ffff;
      }
    }
  }

  .title {
      font-size: 50px;
      font-weight: bold;
  }

  .subtitle { 
    display: flex;
    justify-content: space-between;

    .btn {
        background-color: #033d60;
    } 

    .subtext{
        display: flex;
        justify-content: start;
        font-size: 30px;  
    }    

    .subbutton {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }

  .card {
    background: #d4d9e2;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    font-weight: bold;

    .header {        
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
  }
 

    
`;
