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
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Lista de Pedidos
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Quantidade</th>
                      <th>Valor</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Biscoito</td>
                      <td>2</td>
                      <td>2,50</td>
                      <td>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-trash"></i> Excluir</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sabão</td>
                      <td>5</td>
                      <td>1,00</td>
                      <td>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-trash"></i> Excluir</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Macarrão</td>
                      <td>3</td>
                      <td>0,95</td>
                      <td>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-trash"></i> Excluir</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Arroz</td>
                      <td>3</td>
                      <td>3,00</td>
                      <td>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-trash"></i> Excluir</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Leite</td>
                      <td>3</td>
                      <td>4,50</td>
                      <td>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-trash"></i> Excluir</Button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td></td>
                      <td>
                        <strong>Total:</strong>
                      </td>
                      <td>
                        <strong>35,35</strong>
                      </td>
                      <td></td>
                    </tr>
                  </tfoot>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Forms;
