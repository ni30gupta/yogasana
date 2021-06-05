import React, { useState } from 'react'
import { Col, Container, Button, DropdownButton, Row, Table } from 'react-bootstrap'

import { tuterSchedule } from '../API/tutorschedule'
import './BookingProcess.css'


const BookingProcess = React.memo((profile) => {
    const [datas] = tuterSchedule.filter(
        (user) => user.profileId === profile.match.params.profileId
    );

    const [classesBooked, setClassesBooked] = useState({})

    // const [state, setState] = useState({
    //     batchId: null,
    //     dateRange: null,
    //     morningTimeRange: null,
    //     eveningTimeRange: null
    // })

    const state = {
        batchId: null,
        dateRange: null,
        morningTimeRange: null,
        eveningTimeRange: null
    }
    const setState = (val) => {
        return (
            console.log(val)
        )
    }




    console.log(state)
    return (

        <Container>


            <Row className="d-flex justify-between">
                <Col >
                    <select onChange={(e) => state.dateRange = e.target.value} >
                        <option value="none" selected>Batch Date</option>
                        {
                            datas.schedule.map((data) => {
                                return (
                                    <option value={data.batchDate} > {data.batchDate}</option>
                                )
                            })
                        }
                    </select>
                </Col>
                <Col>
                    <div className="timing-chart">
                        <h2>Morning</h2>
                        {
                            datas.timing.morningTime.map((time) => {
                                return (
                                    <div>
                                        <Button onClick={(e) => state.morningTimeRange= e.target.innerHTML } className="m-2 submit-btn" variant="outline-dark">{time}</Button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="timing-chart">
                        <h2>Evening </h2>
                        {
                            datas.timing.eveningTime.map((time) => {
                                return (
                                    <div>
                                        <Button onClick={(e) =>state.eveningTimeRange= e.target.innerHTML} className="m-2 submit-btn" variant="outline-dark">{time}</Button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Col>

            </Row>
            <div className="d-flex align-items-center justify-center">
                <Button onClick={(e) => { console.log(state) }} >Confirm Your Slot</Button>

            </div>
        </Container >
    )

})

export default BookingProcess