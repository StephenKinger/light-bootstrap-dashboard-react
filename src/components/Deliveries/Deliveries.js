import React, { Component } from "react";
import { Container } from "react-bootstrap";

import { Modal,Button, Card, OverlayTrigger, Table, Tooltip, Form } from "react-bootstrap";

class Deliveries extends Component {
    static defaultProps = {
        interval: 1000 * 60 * 5,
        title: 'Jenkins'
    }

    state = {
        loading: true,
        error: false,
        show: false
    }


    handleCreate() {
        this.setState({show: true})
    }

    async componentDidMount() {
        this.setState({deliveries: [{deliverer_name: 'toto', 
                                    checker_name: 'titi', mep_date: 'tata', mer_date: 'tutu', descr: 'turlututu', jiras : ['fjkdshfk', 'ljzlr']}]})
        console.log("json_result")                            
        const result = await fetch('/delivery');
        const json_result = await result.json()
        console.log(json_result)
        let list_of_deliveries = []
        json_result.forEach(delivery => {
            console.log(delivery)
            let reformated_delivery = {}
            reformated_delivery.deliverer_name = delivery.deliverer
            reformated_delivery.checker_name = delivery.checker
            reformated_delivery.mep_date = delivery.week_mep
            reformated_delivery.mer_date = delivery.week_mer
            reformated_delivery.descr = delivery.description
            reformated_delivery.jiras = delivery.jira_links
            
            list_of_deliveries.push(reformated_delivery)
        });
        console.log(list_of_deliveries)
        this.setState({deliveries: list_of_deliveries})
    }

    render() {
        const {deliveries, show} = this.state

        const handleClose = () => this.setState({show: false});
        const handleShow = () => this.setState({show: true});
      
        return (
            <>
            <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Deliveries</Card.Title>
              <p className="card-category">Next Deliveries</p>
            </Card.Header>
            <Card.Body>
              <div className="table-full-width">
                <Table>
                <tbody>
                {deliveries && deliveries.map(delivery => (
                    <tr>
                    <td>
                      <tr>
                      {delivery.deliverer_name}
                      </tr>
                      <tr>
                      {delivery.checker_name}
                      </tr>  
                    </td>
                    <td>
                      <tr>MER {delivery.mer_date}</tr>
                      <tr>MEP {delivery.mep_date}</tr>
                    </td>
                    <td>
                    {delivery.descr}
                    </td>
                    <td>
                        {delivery.jiras && delivery.jiras.map(jira => (
                            <tr>{jira}</tr>
                        ))}
                    </td>
                    <td className="td-actions text-right">
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-488980961">
                            Edit Task..
                          </Tooltip>
                        }
                      >
                        <Button
                          className="btn-simple btn-link p-1"
                          type="button"
                          variant="info"
                        >
                          <i className="fas fa-edit"></i>
                        </Button>
                        </OverlayTrigger>
                    </td>
                  </tr>
                    ))}

                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              
              <Table>
                <tbody>
                <tr>
                <td>
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin"></i>
                      Updated 3 minutes ago
                  </div>
                </td>
                <td className="td-actions text-right">
                    <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-488980961">
                            Add new delivery..
                          </Tooltip>
                        }
                    >
                        <Button onClick={handleShow}>Add</Button>
                    </OverlayTrigger>
              </td>
              </tr>
              </tbody>
              </Table>
            </Card.Footer>
          </Card>
            <Modal show={show} onHide={handleClose} centered={false} >
                <Modal.Header closeButton>
                <Modal.Title>Nouvelle livraison</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>
                        <Form.Group controlId="form.deliverer">
                            <Form.Label>Resp de livraison</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        </td>
                        <td>
                        <Form.Group controlId="form.checker">
                            <Form.Label>Controleur de livraison</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <Form.Group controlId="form.week_mer">
                            <Form.Label>S MER</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        </td>
                        <td>
                        <Form.Group controlId="form.week_mep">
                            <Form.Label>S MEP</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        </td>
                        </tr>
                        </tbody>
                        </Table>
                        
                        <Form.Group controlId="form.description">
                            <Form.Label>Description de la livraison</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="form.jiras">
                            <Form.Label>liste des jiras</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default Deliveries