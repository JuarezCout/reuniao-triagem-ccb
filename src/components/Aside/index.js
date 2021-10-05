import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Header, MenuContainer } from "./styles";
import '@fortawesome/fontawesome-free/css/all.css'
import "@fortawesome/fontawesome-free/js/all"

import logo from '../../assets/images/logo-ccb-light.png'

const Aside = () => {
  return (
    <Container>
      <Header>
        <img src={logo}/>
      </Header>

      <MenuContainer>
        <div class="sidebar">
          <div class="sidebar-center">
            <ul class="list">
              <Link style={{ textDecoration: 'none', color: 'black' }}>
                <li class="list-item" component={Link} to='/nova-lista'>
                  <i class="list-item-icon fas fa-home"></i>
                  <span class="list-item-text">Início</span>
                </li>
              </Link>

              <Link style={{ textDecoration: 'none', color: 'black' }}>
                <li class="list-item">
                  <i class="list-item-icon fas fa-th-list"></i>
                  <span class="list-item-text">Adicionar nova lista</span>
                </li>
              </Link>

              <Link style={{ textDecoration: 'none', color: 'black' }}>
                <li class="list-item">
                  <i class="list-item-icon fas fa-stream"></i>
                  <span class="list-item-text">Histórico</span>
                </li>
              </Link>

              <Link style={{ textDecoration: 'none', color: 'black' }}>
                <li class="list-item">
                  <i class="list-item-icon fas fa-sign-out-alt"></i>
                  <span class="list-item-text">Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </MenuContainer>
    </Container >
  );
};

export default Aside;
