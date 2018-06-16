import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>

          <Col xs="12" sm="5">
            <Card>
              <CardHeader>
                <i className="fa fa-lg fa-money"></i> Pagamentos
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col xs="12">
                    <Label htmlFor="produto">Forma de Pagamento</Label>
                    <Input type="select" name="ccmonth" id="ccmonth">
                      <option value="1">Dinheiro</option>
                      <option value="2">Cartão de Crédito</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12">
                    <Label htmlFor="valor">Valor</Label>
                    <Input type="text" id="valor" placeholder="R$ 0,00" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12">
                    <Label htmlFor="name">Nome</Label>
                    <Input type="text" id="name" placeholder="Dígite seu nome" required />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12">
                    <Label htmlFor="ccnumero">Número do Cartão de Crédito</Label>
                    <Input type="text" id="ccnumero" placeholder="0000 0000 0000 0000" required />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="4">
                    <Label htmlFor="ccmes">Mês</Label>
                    <Input type="select" name="ccmes" id="ccmes">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </Input>
                  </Col>
                  <Col xs="4">
                    <Label htmlFor="ccano">Ano</Label>
                    <Input type="select" name="ccano" id="ccano">
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                    </Input>
                  </Col>
                  <Col xs="4">
                    <Label htmlFor="cvv">CVV/CVC</Label>
                    <Input type="text" id="cvv" placeholder="123" required />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="success" className="mr-1"><i className="fa fa-dot-circle-o"></i> Salvar</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Resetar</Button>
              </CardFooter>
            </Card>
          </Col>

          <Col xs="12" lg="7">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Lista de Produtos
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Valor</th>
                    <th>Forma de Pagamento</th>
                    <th>Data de Compra</th>
                    <th>Situação</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>100,00</td>
                    <td>Dinheiro</td>
                    <td>16/06/2018</td>
                    <td>
                      <Badge color="success">Pago</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>200,00</td>
                    <td>Cartão de Crédito</td>
                    <td>16/06/2018</td>
                    <td>
                      <Badge color="danger">Recusado</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>300,00</td>
                    <td>Cartão de Crédito</td>
                    <td>16/06/2018</td>
                    <td>
                      <Badge color="warning">Pendente</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>400,00</td>
                    <td>Dinheiro</td>
                    <td>16/06/2018</td>
                    <td>
                      <Badge color="success">Pago</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>500,00</td>
                    <td>Dinheiro</td>
                    <td>16/06/2018</td>
                    <td>
                      <Badge color="success">Pago</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Forms;
