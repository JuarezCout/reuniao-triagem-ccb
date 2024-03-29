//#packages
import React, { useState, useRef, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

//# services
import api from '../../services/api'

//# components
import Lottie from 'react-lottie'
import {
  Button,
  Row,
  Col,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { MdSearch, MdPlaylistAdd, MdDeleteSweep, MdContentCopy, MdCloudDownload, MdOutlineEditNote, MdClose } from 'react-icons/md'

//# styles
import { Container } from "../../styles/HomePage";

import failureAnimation from '../../assets/animations/70780-no-result-found.json'
import listAnimation from '../../assets/animations/19814-data-list.json'

//# packages
//# helpers

function Home() {

  const [modalSearch, setModalSearch] = useState(false)
  const [modalNewList, setModalNewList] = useState(false)
  const [searchedList, setSearchedList] = useState({})
  const [searchedDate, setSearchedDate] = useState('')
  const [listHistory, setListHistory] = useState([])
  const [newListDate, setNewListDate] = useState('')


  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(10), (val, index) => year - index);

  const typeLists = ["Reuniao Trimestral Regional Geral", "Reunião Geral do Ministério Regional", "Reunião Ministerial Local"]

  const lists = useSelector((state) => state.lists)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   async function getList() {
  //     await api.get('/api')
  //       .then((response) => {
  //         const lists = response.data
  //         setListHistory(lists.slice(0, 4))
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  //   }

  //   getList()
  // }, [])

  const toggleSearch = () => setModalSearch(!modalSearch)
  const toggleNewList = () => setModalNewList(!modalNewList)

  function searchValue(event, values) {
    var selectDate = values.monthSelect + '/' + values.yearSelect
    setSearchedList(listHistory.find(el => el.data.substr(el.data.length - 7) === selectDate && el.nome === values.typeSelect))
    toggleSearch()

  }

  async function addNewList(event, values) {
    try {
      const data = {
        nome: values.typeSelect,
        data: values.newListDate,
        localidades: []
      }
      const {data: newList} = await api.post('/api', data)
      console.log(newList._id)
    } catch (error) {
      
    }
  }

  function handleEditList(id) {

    console.log(id)

  }


  function handleDownloadList(id) {

    console.log(id)

  }


  function handleCopyList(id) {

    console.log(id)

  }


  function handleDeleteList(id) {

    console.log(id)

  }

  function handleChangeDateSearch(val) {
    setSearchedDate(val)
  }

  return (
    <Container>
      <Row>
        <p className="mt-2 pr-0" style={{ fontSize: '60px' }}>Projeto para Triagem CCB</p>
        <p className="pr-0" style={{ fontSize: '30px' }}>Lista para Reuniões Ministeriais da Região</p>
      </Row>

      <Row>
        <Col md={10}>
          <Row className="mt-4">
            <Col md={9} xs={12}>
              <AvForm onValidSubmit={(event, values) => {
                searchValue(event, values)
              }}>
                <div className="d-inline-flex align-items-center">
                  <span style={{ marginRight: '5px' }}><strong>Mês: </strong></span>
                  <AvField
                    type="select"
                    name="monthSelect"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: 'Vazio!'
                      }
                    }}
                    required
                  >
                    <option></option>
                    <option value="01">Janeiro</option>
                    <option value="02">Fevereiro</option>
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

                  <span style={{ marginLeft: '10px', marginRight: '5px' }}><strong>Ano: </strong></span>
                  <AvField
                    type="select"
                    name="yearSelect"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: 'Vazio!'
                      }
                    }}
                    required
                  >
                    <option></option>
                    {
                      years.map((year, index) => {
                        return <option key={`year${index}`} value={year}>{year}</option>
                      })
                    }
                  </AvField>

                  <span style={{ marginLeft: '10px', marginRight: '15px' }}><strong>Reunião: </strong></span>
                  <AvField
                    type="select"
                    name="typeSelect"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: 'Campo obrigatório!'
                      }
                    }}
                    required
                  >
                    <option></option>
                    {typeLists.map(type => (
                      <option value={type}>{type}</option>
                    ))}
                  </AvField>
                  <Button
                    color="secondary"
                    style={{ marginLeft: '15px' }}>
                    <MdSearch className="ml-2" />
                  </Button>
                </div>
              </AvForm>

            </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>

              {/* <Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: "/nova-lista" }}> */}
              <Button className="align-items-center" color="success" onClick={toggleNewList}>
                Adicionar nova Lista <MdPlaylistAdd className="ml-2" style={{ width: '25px', height: 'auto' }} />
              </Button>
              {/* </Link> */}
            </Col>
          </Row>

          <Row className="mt-2">
            <div>
              <Table >
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}>HISTÓRICO</th>
                    <th style={{ width: '50%' }}></th>
                    <th style={{ width: '30%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {lists && lists.map(list => (
                    <tr style={{ marginTop: "15px !important" }}>
                      <td>
                        {list.data}
                      </td>
                      <td>
                        <strong>{list.nome}</strong>
                      </td>
                      <td>
                        <Button
                          outline color="warning"
                          title="Editar"
                          onClick={() => handleEditList(list._id)}
                          style={{ marginLeft: '15px' }}>
                          <MdOutlineEditNote className="ml-2" />
                        </Button>
                        <Button
                          outline color="primary"
                          title="Download"
                          onClick={() => handleDownloadList(list._id)}
                          style={{ marginLeft: '15px' }}>
                          <MdCloudDownload className="ml-2" />
                        </Button>
                        <Button
                          outline color="secondary"
                          title="Copiar"
                          onClick={() => handleCopyList(list._id)}
                          style={{ marginLeft: '15px' }}>
                          <MdContentCopy className="ml-2" />
                        </Button>
                        <Button
                          outline color="danger"
                          title="Deletar"
                          onClick={() => handleDeleteList(list._id)}
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
        <Col md={2} className="p-0">

        </Col>
      </Row>

      <Modal isOpen={modalSearch} toggle={toggleSearch} size='lg' centered>
        <div className="modal-header rounded-0 d-flex align-items-center p-0 ">
          <span
            className="close ml-auto"
            onClick={toggleSearch}
            style={{ fontSize: '30px', cursor: 'pointer', opacity: '1', marginLeft: '5px' }}
          >
            &times;
          </span>
        </div>
        {searchedList === undefined ? (
          <>
            <ModalBody>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: failureAnimation
                }}
                height={200}
                width={200}
                style={{ marginTop: -20, marginBottom: 0 }}
              />
              <h3><center><strong>Não foi encontrada reunião com os parâmetros informados!</strong></center></h3>
            </ModalBody>
            <ModalFooter>
              <Button
                outline color="danger"
                title="Fechar"
                onClick={() => toggleSearch()}
                style={{ marginLeft: '15px' }}> Fechar{' '}
                <MdClose className="ml-2" />
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalBody>
              <Table >
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}>Mês/Ano</th>
                    <th>Tipo de Reunião</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#d4d9e2" }}>
                    <td>
                      {searchedList.data}
                    </td>
                    <td>
                      <strong>{searchedList.nome}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button
                outline color="warning"
                title="Editar"
                onClick={() => handleEditList(searchedList.id)}
                style={{ marginLeft: '15px' }}> Editar{' '}
                <MdOutlineEditNote className="ml-2" />
              </Button>
              <Button
                outline color="primary"
                title="Download"
                onClick={() => handleDownloadList(searchedList.id)}
                style={{ marginLeft: '15px' }}> Download{' '}
                <MdCloudDownload className="ml-2" />
              </Button>
              <Button
                outline color="secondary"
                title="Copiar"
                onClick={() => handleCopyList(searchedList.id)}
                style={{ marginLeft: '15px' }}> Copiar{' '}
                <MdContentCopy className="ml-2" />
              </Button>
              <Button
                outline color="danger"
                title="Deletar"
                nClick={() => handleDeleteList(searchedList.id)}
                style={{ marginLeft: '15px' }}> Deletar{' '}
                <MdDeleteSweep className="ml-2" />
              </Button>
            </ModalFooter>
          </>
        )}
      </Modal>

      <Modal isOpen={modalNewList} toggle={toggleNewList} size='lg' centered>
        <div className="modal-header rounded-0 d-flex align-items-center p-0">
          <span
            className="close ml-auto"
            onClick={toggleNewList}
            style={{ fontSize: '30px', cursor: 'pointer', opacity: '1', marginLeft: '10px' }}
          >
            &times;
          </span>
        </div>
        <AvForm onValidSubmit={(event, values) => { addNewList(event, values) }}>
          <ModalBody>
            <h3 style={{ marginTop: '25px' }}><strong><center>Se deseja criar uma nova lista, selecione o tipo de reunião nas opções abaixo</center></strong></h3>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Col md={8} className="mt-4" >
                <AvField
                  className="mb-3"
                  label="Tipo de Reunião"
                  type="select"
                  name="typeNewSelect"
                >
                  {typeLists.map(type => (
                    <option value={type}>{type}</option>
                  ))}
                </AvField>

                <AvField
                  label="Data da Reunião"
                  type="date"
                  name="newListDate"
                  required
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              outline color="success"
              title="Adicionar"
              style={{  justifyContent: 'center' }}
            > Adicionar{' '}
              <MdPlaylistAdd className="ml-2" />
            </Button>
            <Button
              outline color="danger"
              title="Cancelar"
              onClick={() => toggleNewList()}
              style={{ marginLeft: '15px' }}> Cancelar{' '}
              <MdClose className="ml-2" />
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    </Container>
  );
};

export default Home;
