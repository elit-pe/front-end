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

          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <i className="fa fa-lg fa-cart-plus"></i> Produtos
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col xs="6">
                    <Label htmlFor="produto">Produto</Label>
                    <Input type="text" id="produto" placeholder="Digite o nome do produto" />
                  </Col>
                  <Col xs="6">
                    <Label htmlFor="fabricante">Fabricante</Label>
                    <Input type="text" id="fabricante" placeholder="Digite o nome da fabricante do produto" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="distribuidora">Distribuidora</Label>
                      <Input type="text" id="distribuidora" placeholder="Digite o nome da distribuidora" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="quantidadeEstoque">Quantidade em Estoque</Label>
                      <Input type="number" id="quantidadeEstoque" min="0" max="999" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="valor">Valor</Label>
                      <Input type="text" id="valor" placeholder="R$ 0,00" />
                    </FormGroup>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="success" className="mr-1"><i className="fa fa-dot-circle-o"></i> Salvar</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Resetar</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Lista de Produtos
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Fabricante</th>
                    <th>Qtd. Estoque</th>
                    <th>Valor</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Biscoito</td>
                    <td>Nestlé</td>
                    <td>50</td>
                    <td>2,50</td>
                  </tr>
                  <tr>
                    <td>Sabão</td>
                    <td>Lux</td>
                    <td>100</td>
                    <td>1,00</td>
                  </tr>
                  <tr>
                    <td>Macarrão</td>
                    <td>Vitarela</td>
                    <td>25</td>
                    <td>0,95</td>
                  </tr>
                  <tr>
                    <td>Arroz</td>
                    <td>Arrozeiro</td>
                    <td>200</td>
                    <td>3,00</td>
                  </tr>
                  <tr>
                    <td>Leite</td>
                    <td>Itambé</td>
                    <td>300</td>
                    <td>4,50</td>
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
