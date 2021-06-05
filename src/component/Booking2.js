import React, { Component } from "react";
import "./Booking2.css";
import { Container, Col, Row, Table, Button, Nav } from "react-bootstrap";
import { schedule } from "../API/booking2Data";
import { Link } from "react-router-dom";

const [getData] = schedule.filter((data) => data.profileId === "101");

export default class Booking2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sno: 0,
      problem: "",
      arrData: [],
      jsonData: {
        date: null,
        time: null,
        day: null,
        price: null,
      },
    };
  }

  selected = (id) => {
    let t = document.getElementById("t1").rows[id];
    // console.log(t.cells)
    for (let i = 1; i < 5; i++) {
      // console.log( t.cells[i].innerText)
      this.state.arrData.push(t.cells[i].innerText);
    }

    console.log(this.state.arrData);
    this.setState({
      jsonData: {
        date: this.state.arrData[0],
        time: this.state.arrData[1],
        day: this.state.arrData[2],
        price: this.state.arrData[3],
      },
    });

    console.log(this.state.jsonData);
  };

  // console.log( > td:nth-child(3) > p`).innerHTML);
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col lg={8} className="d-flex flex-row justify-content-between mb-3">
            <Nav
              variant="pills"
              defaultActiveKey={`#${getData.batches[0].batchId}`}
            >
              {getData.batches.map((data) => {
                return (
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => this.setState({ sno: data.batchId - 1 })}
                      href={`#${data.batchId}`}
                    >
                      {" "}
                      {data.dateRange}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row>
          <Col id="102" lg={8}>
            <form action="/action_page.php">
              <Table id="t1" striped bordered hover>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Days</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.batches[this.state.sno].time.map((time, i) => {
                    return (
                      <tr id={`${i}`}>
                        <td>
                          <input
                            onChange={() => this.selected(i + 1)}
                            type="radio"
                            name="batch"
                          />
                        </td>
                        <td>
                          <p>{getData.batches[this.state.sno].dateRange}</p>
                        </td>
                        <td>
                          <p>{time}</p>
                        </td>
                        <td>
                          <p>{getData.batches[this.state.sno].days}</p>
                        </td>
                        <td>
                          <p>
                            {" "}
                            {`Rs.${
                              getData.batches[this.state.sno].price
                            }/-`}{" "}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </form>
            <Link to="/payment">
              <Button className="btn btn-success my-3 ">Book Class</Button>
            </Link>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    );
  }
}
