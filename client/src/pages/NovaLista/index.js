//#packages
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

//# services
import { createList } from "../../actions"


//# components
import Lottie from 'react-lottie'
import {
  Button,
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
} from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { BsFileEarmarkPdfFill, BsViewStacked, BsChevronCompactDown } from 'react-icons/bs'

//# styles
import { Container } from "../../styles/NewList";


function Home() {

  const [typeCollapse, setTypeCollapse] = useState(false)
  const [localCollapse, setLocalCollapse] = useState(false)
  const [title, setTitle] = useState('')
  const [localValue, setLocalValue] = useState('')
  const [reload, setReload] = useState(0)
  const [listData, setListData] = useState({data: "", nome: "", localidades:[]})

  const dateMeeting = new Date().toLocaleDateString()

  const dispatch = useDispatch()

  useEffect(() => {
    // async function getList() {
    //   await api.get('/api')
    //     .then((response) => {
    //       setLocalList(response.data)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     });
    // }

    // getList()
  }, [reload])

  function handleTypeMeeting(values) {
    setListData({...listData, nome: values.typeNewSelect})
    setReload(reload + 1)
    toggleType()
  }

  function handleAddLocal(e) {
    e.preventDefault()

    dispatch(createList(listData))
  }

  function handleEditLocal(id) {

  }

  function handleDownloadList() {

  }


  function handleViewList() {

  }

  const toggleType = () => setTypeCollapse(!typeCollapse)
  const toggleLocal = () => setLocalCollapse(!localCollapse)

  return (
    <Container>
      <Row>
        <p className="mt-2 pr-0 title">{listData.nome}</p>
        <Col md={10} className='subtitle'>
          <Col className="subtext">
            <p className="mt-2 pr-0 subtext">{dateMeeting}</p>
          </Col>
          <Col md={3} className="subbutton">
            <Button color="success">
              Prévia <BsViewStacked className="ml-2" style={{ width: '15px', height: 'auto' }} />
            </Button>
            <Button style={{ marginLeft: '10px' }} color="success">
              Download <BsFileEarmarkPdfFill className="ml-2" style={{ width: '15px', height: 'auto' }} />
            </Button>
          </Col>
        </Col>

        <Col md={10} className="mt-3">
          <Card>
            <CardBody>
              <div className="header">
                <p className="m-0">Tipo de Reunião</p>
                <BsChevronCompactDown style={{ width: '30px', height: 'auto' }} onClick={toggleType} />
              </div>
              <Collapse isOpen={typeCollapse}>
                <AvForm
                  onValidSubmit={(event, values) => { handleTypeMeeting(values) }}
                  className="d-flex flex-row"
                >
                  <Col xs={10} className="mt-3">
                    <AvField
                      type="select"
                      name="typeNewSelect"
                      style={{ flexGrow: 3 }}
                    >
                      <option value="">Selecione o tipo de reunião...</option>
                      <option value="Reuniao Ministerial Geral">Reuniao Ministerial Geral</option>
                      <option value="Reuniao Ministerial Regional">Reuniao Ministerial Regional</option>
                      <option value="Reuniao Trimestral Regional Geral">Reuniao Trimestral Regional Geral</option>
                    </AvField>
                  </Col>
                  <Col xs={2} className="mt-3">
                    <Button>
                      Alterar
                    </Button>
                  </Col>

                </AvForm>
              </Collapse>
            </CardBody>
          </Card>
        </Col>
        <Col md={10} className="mt-4">
        <Card>
            <CardBody>
              <div className="header">
                <p className="m-0">Localidade</p>
                <BsChevronCompactDown style={{ width: '30px', height: 'auto' }} onClick={toggleLocal} />
              </div>
              <Collapse isOpen={localCollapse}>
                <AvForm
                  onValidSubmit={(event, values) => { handleAddLocal(values) }}
                  className="d-flex flex-row"
                >
                  <Col xs={10} className="mt-3">
                  <AvField
                      name="companyName"
                      type="text"
                      errorMessage="Campo obrigatório"
                      required
                      value={localValue}
                    />
                  </Col>
                  <Col xs={2} className="mt-3">
                    <Button>
                      Adicionar
                    </Button>
                  </Col>
                </AvForm>
              </Collapse>
            </CardBody>
          </Card>


          <Row className="mt-5">

          </Row>
        </Col>
        <Col md={2} className="p-0">

        </Col>
      </Row>
    </Container>
  );
};

export default Home;
