// import "./BookingSlot.css"
import { Table, Row, Button, Col, Container, InputGroup } from 'react-bootstrap'
import { Typography } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"



export default class BookingSlot extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            morningTime: ["5:00", "6:00", "7:00", "8:00", "9:00", "10:00"],
            eveningTime: ["4:00", "5:00", "6:00", "7:00"],
            weekTiming: ["Mon", "Tue", "Wed", "Thur", "Fri"],
            weekendtiming: ["Saturday", "Sunday"],
            weekendTimimg: ["6:00 AM", "7:00 AM", "8:00 AM"],
            bookedClass: []
        }
    }

    changeClass = (id) => {

        ((document.getElementById(id).className === "") ?
            document.getElementById(id).className = "changed"
            :
            document.getElementById(id).classList.remove('changed'))
    }

    setbooked = (id) => {
        if (this.state.bookedClass.indexOf(id) === -1) {
            this.setState({ bookedClass: [id, ...this.state.bookedClass] }, () => { console.log(this.state.bookedClass) })
        } else {
            console.log("enetrd in remove func")
            var array = [...this.state.bookedClass]; // make a separate copy of the array
            var index = array.indexOf(id)
            if (index !== -1) {
                array.splice(index, 1);
                this.setState({ bookedClass: array });
            }
        }
    }

    sendBookingtoBackend = () => {
        console.log("booking ")
    }


    render() {
        return (
            <Container>
                <Row>
                    <Typography className="mt-3 mb-2" center variant="h5">Session Time : 60 Minutes</Typography>
                </Row>
                <Row className="d-flex, justify-content-between">
                    <Col lg={6} sm={12} className="mb-4">
                        <Table bordered variant="light">
                            <thead>
                                <tr>
                                    <th>timing</th>
                                    <th colSpan="6">Morning</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.weekTiming.map((day) => {
                                        return (
                                            <tr>
                                                <p className="m-0">{day}</p>
                                                {this.state.morningTime.map((timing) => {
                                                    return (
                                                        <td onClick={(() => { this.changeClass(`m${day}${timing}`); this.setbooked(`Morning_${day}_${timing}`) })} id={`m${day}${timing}`} >  {timing} </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>

                    <Col lg={1} sm={12}></Col>

                    <Col lg={5} sm={12} >
                        <Table bordered variant="light">
                            <thead>
                                <tr>
                                    <th>timing</th>
                                    <th colSpan="6">Evening</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.weekTiming.map((day) => {
                                        return (
                                            <tr>
                                                <p className="m-0">{day}</p>
                                                {this.state.eveningTime.map((timing) => {
                                                    return (
                                                        // <td onClick={(() => { this.changeClass(`m${day}${timing}`); this.setbooked(`Morning_${day}_${timing}`) })} id={`m${day}${timing}`} >  {timing} </td>
                                                        <td onClick={(() => { this.changeClass(`e${day}${timing}`); this.setbooked(`Evening_${day}_${timing}`) })} id={`e${day}${timing}`} >  {timing} </td>
                                                        // <td onClick={(() => this.changeClass(`e${day}${timing}`))} id={`e${day}${timing}`}>  {timing} </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Table bordered variant="light">
                        <thead>
                            <tr>
                                <th colSpan="7">For Exclusive Meditation and Healing</th>
                            </tr>
                            <tr>
                                <th>timing</th>
                                <th colSpan="6">Morning Only</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.weekendtiming.map((day) => {
                                    return (
                                        <tr>
                                            <p className="m-0">{day}</p>
                                            {this.state.weekendTimimg.map((timing) => {
                                                return (
                                                    <td onClick={(() => this.changeClass(`s${day}${timing}`))} id={`s${day}${timing}`}>  {timing} </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
                <Link to="/confirmslot">
                    <Button onClick={this.sendBookingtoBackend} className="my-4" size="large" >  Confirm Booking</Button>
                </Link>
            </Container>
        )
    }
}






















/*

function BookingSlot() {
const morningTime = ["5:00", "6:00", "7:00", "8:00", "9:00", "10:00"]
const eveningTime = ["4:00", "5:00", "6:00", "7:00"]
const weekTiming = ["Mon", "Tue", "Wed", "Thur", "Fri"]
const weekendtiming = ["Saturday", "Sunday"]
const weekendTimimg = ["6:00 AM", "7:00 AM", "8:00 AM"]

const [booked, setbooked] = useState([])







const changeClass = (id) => {

((document.getElementById(id).className === "") ?
document.getElementById(id).className = "changed"
:
document.getElementById(id).classList.remove('changed'))
}
return (
<Container>
<Row>
<Typography className="mt-3 mb-2" center variant="h5">Session Time : 60 Minutes</Typography>
</Row>
<Row className="d-flex, justify-content-between">
<Col lg={6} sm={12} className="mb-4">
 <Table bordered variant="light">
     <thead>
         <tr>
             <th>timing</th>
             <th colSpan="6">Morning</th>
         </tr>
     </thead>
     <tbody>
         {
             weekTiming.map((day) => {
                 return (
                     <tr>
                         <p className="m-0">{day}</p>
                         {morningTime.map((timing) => {
                             return (
                                 <td onClick={(() => { changeClass(`m${day}${timing}`); setbooked(`m${day}${timing}`) })} id={`m${day}${timing}`} >  {timing} </td>
                             )
                         })}
                     </tr>
                 )
             })
         }
     </tbody>
 </Table>
</Col>

<Col lg={1} sm={12}></Col>

<Col lg={5} sm={12} >
 <Table bordered variant="light">
     <thead>
         <tr>
             <th>timing</th>
             <th colSpan="6">Evening</th>
         </tr>
     </thead>
     <tbody>
         {
             weekTiming.map((day) => {
                 return (
                     <tr>
                         <p className="m-0">{day}</p>
                         {eveningTime.map((timing) => {
                             return (
                                 <td onClick={(() => changeClass(`e${day}${timing}`))} id={`e${day}${timing}`}>  {timing} </td>
                             )
                         })}
                     </tr>
                 )
             })
         }
     </tbody>
 </Table>
</Col>
</Row>
<Row>
<Table bordered variant="light">
 <thead>
     <tr>
         <th colSpan="7">For Exclusive Meditation and Healing</th>
     </tr>
     <tr>
         <th>timing</th>
         <th colSpan="6">Morning Only</th>
     </tr>
 </thead>
 <tbody>
     {
         weekendtiming.map((day) => {
             return (
                 <tr>
                     <p className="m-0">{day}</p>
                     {weekendTimimg.map((timing) => {
                         return (
                             <td onClick={(() => changeClass(`s${day}${timing}`))} id={`s${day}${timing}`}>  {timing} </td>
                         )
                     })}
                 </tr>
             )
         })
     }
 </tbody>
</Table>
</Row>
<Button className="my-4" size="large" >  Confirm Booking</Button>
</Container>
)
}

export default BookingSlot

*/

