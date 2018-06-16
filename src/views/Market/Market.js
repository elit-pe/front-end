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
                <i className="fa fa-lg fa-globe"></i> Mercado
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col xs="6">
                    <Label htmlFor="mercado">Nome</Label>
                    <Input type="text" id="mercado" placeholder="Digite o nome do mercado" />
                  </Col>
                  <Col xs="6">
                    <Label htmlFor="responsavel">Responsável</Label>
                    <Input type="text" id="responsavel" placeholder="Digite o nome da responsável do mercado" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="2">
                    <Label htmlFor="distribuidora">Cep</Label>
                    <Input type="text" id="distribuidora" placeholder="00000-000" />
                  </Col>
                  <Col xs="6">
                    <Label htmlFor="quantidadeEstoque">Logradouro</Label>
                    <Input type="number" id="quantidadeEstoque" min="0" max="999" />
                  </Col>
                  <Col xs="4">
                    <Label htmlFor="valor">Número</Label>
                    <Input type="text" id="valor" placeholder="00000" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="6">
                    <Label htmlFor="distribuidora">Bairro</Label>
                    <Input type="text" id="distribuidora" placeholder="00000-000" />
                  </Col>
                  <Col xs="6">
                    <Label htmlFor="quantidadeEstoque">Complemento</Label>
                    <Input type="number" id="quantidadeEstoque" min="0" max="999" />
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
                      <th>Mercado</th>
                      <th>Responsável</th>
                      <th>Endereço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mercado A</td>
                      <td>João</td>
                      <td>Rua das Amoras, 250, Recife-PE</td>
                    </tr>
                    <tr>
                      <td>Mercado B</td>
                      <td>José</td>
                      <td>Rua das Amoras, 250, Recife-PE</td>
                    </tr>
                    <tr>
                      <td>Mercado C</td>
                      <td>Maria</td>
                      <td>Rua das Amoras, 250, Recife-PE</td>
                    </tr>
                    <tr>
                      <td>Mercado D</td>
                      <td>Renato</td>
                      <td>Rua das Amoras, 250, Recife-PE</td>
                    </tr>
                    <tr>
                      <td>Mercado E</td>
                      <td>Fernanda</td>
                      <td>Rua das Amoras, 250, Recife-PE</td>
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
