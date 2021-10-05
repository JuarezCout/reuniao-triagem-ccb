import React from "react"
import { Button, Row, Col, Table } from 'reactstrap'
import { AvForm, AvGroup, AvInput, AvFeedback, AvField } from 'availity-reactstrap-validation'
import { MdFileDownload, MdSearch, MdPlaylistAdd, MdDeleteSweep, MdContentCopy, MdCloudDownload, MdOutlineEditNote } from 'react-icons/md'

import { Container } from "./styles";

const Content = () => {

  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(10), (val, index) => year - index);

  const listHistory = [{ id: 1, date: '03/2021', name: 'Reuniao Trimestral Regional' },
  { id: 2, date: '03/2021', name: 'Reuniao Trimestral Regional' },
  { id: 3, date: '03/2021', name: 'Reuniao Trimestral Regional' }]

  function searchValue() {

  }

  function addNewList() {

  }

  function handleEditList() {

  }


  function handleDownloadList() {

  }


  function handleCopyList() {

  }


  function handleDeletList() {

  }


  return (
    <Container>
      <Row>
        <p className="mt-2" style={{ fontSize: '60px' }}>Projeto para Triagem CCB</p>
        <p style={{ fontSize: '30px' }}>Lista para Reuniões Ministeriais da Região</p>
      </Row>

      <Row>
        <Col md={8}>
          <Row className="mt-4">
            <Col md={8} xs={12}>
              <AvForm>
                <div className="d-inline-flex align-items-center">
                  <span style={{ marginRight: '15px' }}><strong>Mês: </strong></span>
                  <AvField type="select" name="month-select">
                    <option value="01">Janeiro</option>
                    <option value="02">fevereiro</option>
                    <option value="03">Março</option>
                    <option value="04">Abril</option>
                    <option value="05">Maio</option>
                    <option value="06">Junho</option>
                    <option value="07">Julho</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                  </AvField>

                  <span style={{ marginLeft: '25px', marginRight: '15px' }}><strong>Ano: </strong></span>
                  <AvField type="select" name="year-select">
                    {
                      years.map((year, index) => {
                        return <option key={`year${index}`} value={year}>{year}</option>
                      })
                    }
                  </AvField>

                  <span style={{ marginLeft: '25px', marginRight: '25px' }}>ou</span>

                  <AvField name="dateSelect" placeholder="Mês/Ano" type="text" validate={{ date: { format: 'MM/YYYY' } }} title="Use MM/YYYY" />

                  <Button
                    color="secondary"
                    onClick={() => searchValue()}
                    style={{ marginLeft: '15px' }}>
                    <MdSearch className="ml-2" />
                  </Button>
                </div>
              </AvForm>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button className="align-items-center" color="success" onClick={() => addNewList()}>
                Adicionar nova Lista <MdPlaylistAdd className="ml-2" style={{ width: '30px', height: 'auto' }} />
              </Button>
            </Col>
          </Row>

          <Row className="mt-5">
            <div>
              <Table >
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}>Data</th>
                    <th style={{ width: '50%' }}>Tipo de Reunião</th>
                    <th style={{ width: '20%' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {listHistory.map(list => (
                    <tr style={{ marginTop: "15px !important" }}>
                      <td>
                        {list.date}
                      </td>
                      <td>
                        {list.name}
                      </td>
                      <td>
                        <Button
                          outline color="warning"
                          title="Editar"
                          onClick={() => handleEditList(list.id)}
                          style={{ marginLeft: '15px' }}>
                          <MdOutlineEditNote className="ml-2" />
                        </Button>
                        <Button
                          outline color="primary"
                          title="Download"
                          onClick={() => handleDownloadList(list.id)}
                          style={{ marginLeft: '15px' }}>
                          <MdCloudDownload className="ml-2" />
                        </Button>
                        <Button
                          outline color="secondary"
                          title="Copiar"
                          onClick={() => handleCopyList(list.id)}
                          style={{ marginLeft: '15px' }}>
                          <MdContentCopy className="ml-2" />
                        </Button>
                        <Button
                          outline color="danger"
                          title="Deletar"
                          nClick={() => handleDeletList(list.id)}
                          style={{ marginLeft: '15px' }}>
                          <MdDeleteSweep className="ml-2" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

          </Row>
        </Col>
        <Col md={4}>

        </Col>
      </Row>
    </Container>
  );
};

export default Content;
