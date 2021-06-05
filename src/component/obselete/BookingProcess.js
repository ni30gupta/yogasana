// import React from 'react';
// import Helmet from 'react-helmet';
// import moment from 'moment';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

// function getWeekDays(weekStart) {
//     const days = [weekStart];
//     if (moment()._d.getDay === 1) {

//         for (let i = 1; i < 7; i += 1) {
//             days.push(
//                 moment(weekStart)
//                     .add(i, 'days')
//                     .toDate()
//             );
//         }
//         console.log(moment()._d.getDay())
//     }
//     return days;
// }

// function getWeekRange(date) {
//     return {
//         from: moment(date)
//             .startOf('week')
//             .toDate(),
//         to: moment(date)
//             .endOf('week')
//             .toDate(),
//     };
// }

// export default class BookingProcess extends React.Component {
//     state = {
//         hoverRange: undefined,
//         selectedDays: [],
//     };

//     handleDayChange = date => {
//         this.setState({
//             selectedDays: getWeekDays(getWeekRange(date).from),
//         });
//     };

//     handleDayEnter = date => {
//         this.setState({
//             hoverRange: getWeekRange(date),
//         });
//     };

//     handleDayLeave = () => {
//         this.setState({
//             hoverRange: undefined,
//         });
//     };

//     handleWeekClick = (weekNumber, days, e, modifiers = {}) => {
//         if (modifiers.disabled) {
//             return;
//         }
//         this.setState({
//             selectedDays: modifiers.selected ? undefined : days,
//         });
//     };



//     render() {
//         const { hoverRange, selectedDays } = this.state;

//         const daysAreSelected = selectedDays.length > 0;

//         const modifiers = {
//             hoverRange,
//             selectedRange: daysAreSelected && {
//                 from: selectedDays[0],
//                 to: selectedDays[6],
//             },
//             hoverRangeStart: hoverRange && hoverRange.from,
//             hoverRangeEnd: hoverRange && hoverRange.to,
//             selectedRangeStart: daysAreSelected && selectedDays[0],
//             selectedRangeEnd: daysAreSelected && selectedDays[6],
//         };



//         return (
//             <div className="SelectedWeekExample">
//                 <DayPicker
//                     selectedDays={selectedDays}
//                     showWeekNumbers
//                     showOutsideDays
//                     modifiers={modifiers}
//                     onDayClick={this.handleDayChange}
//                     onDayMouseEnter={this.handleDayEnter}
//                     onDayMouseLeave={this.handleDayLeave}
//                     onWeekClick={this.handleWeekClick}
//                     disabledDays={[

//                         {


//                             before: new Date()
//                         },
//                     ]}
//                 />
//                 {selectedDays.length === 7 && !this.disabledDays && (
//                     <div>
//                         {moment(selectedDays[0]).format('LL')} –{' '}
//                         {moment(selectedDays[6]).format('LL')}
//                     </div>
//                 )}

//                 <Helmet>
//                     <style>{`
//             .SelectedWeekExample .DayPicker-Month {
//               border-collapse: separate;
//             }
//             .SelectedWeekExample .DayPicker-WeekNumber {
//               outline: none;
//             }
//             .SelectedWeekExample .DayPicker-Day {
//               outline: none;
//               border: 1px solid transparent;
//             }
//             .SelectedWeekExample .DayPicker-Day--hoverRange {
//               background-color: #EFEFEF !important;
//             }

//             .SelectedWeekExample .DayPicker-Day--selectedRange {
//               background-color: #fff7ba !important;
//               border-top-color: #FFEB3B;
//               border-bottom-color: #FFEB3B;
//               border-left-color: #fff7ba;
//               border-right-color: #fff7ba;
//             }

//             .SelectedWeekExample .DayPicker-Day--selectedRangeStart {
//               background-color: #FFEB3B !important;
//               border-left: 1px solid #FFEB3B;
//             }

//             .SelectedWeekExample .DayPicker-Day--selectedRangeEnd {
//               background-color: #FFEB3B !important;
//               border-right: 1px solid #FFEB3B;
//             }

//             .SelectedWeekExample .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
//             .SelectedWeekExample .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
//               border-radius: 0 !important;
//               color: black !important;
//             }
//             .SelectedWeekExample .DayPicker-Day--hoverRange:hover {
//               border-radius: 0 !important;
//             }
//           `}</style>
//                 </Helmet>
//             </div>
//         );
//     }
// }






















import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";



const BookingProcess = () => {
    const [startDate, setStartDate] = useState(null)

    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    console.log(startDate, endDate)
    return (

        <DatePicker
            selected={startDate, endDate}
            // onChange={(date) => setStartDate(date)}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            // showTimeSelect
            // timeFormat="HH:mm"
            // injectTimes={[
            //     setHours(setMinutes(new Date(), 0), 5),
            //     setHours(setMinutes(new Date(), 0), 6),
            //     setHours(setMinutes(new Date(), 0), 7),
            // ]}
            dateFormat="MMMM d, yyyy h:mm aa"
            // minTime={setHours(setMinutes(new Date(), 0), 5)}
            // maxTime={setHours(setMinutes(new Date(), 30), 8)}
            // timeIntervals={60}
            calendarStartDay={1}
            minDate={new Date()}
        >
            <div style={{ color: "red" }}> <strong>Batch Starts from Monday Only</strong> </div>
        </DatePicker>
    );
};





export default BookingProcess
