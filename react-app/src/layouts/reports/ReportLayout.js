import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ReportInfoCard} from "../../components/reports/reportInfoCard/ReportInfoCard"
import './ReportLayoutStyle.css'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {LineChart} from "../../components/reports/LineChart";
import {BarChart} from "../../components/reports/BarChart";

export const ReportLayout = (props) => {

    const [reportInfoCards,setReportInfoCards] = useState(props.reportInfoCards)
    const [calendarVisibility,setCalendarVisibility] = useState(false)

    useEffect(()=>{
        setReportInfoCards(props.reportInfoCards)
    },[props.reportInfoCards])

    const displayReportInfoCards = (infoCard) =>
            <Col className={"p-3"} key={infoCard.id}>
            <ReportInfoCard
                paragraphText={infoCard.paragraphText}
                icons={infoCard.icons}
                data={infoCard.data}/>
            </Col>

    const handleDateClickedOnPage = () =>{
        setCalendarVisibility(!calendarVisibility);
    }

    return(
        <Container>
            <h1>{props.title}</h1>
            <hr/>
            <br/>
            <span onClick={handleDateClickedOnPage} className={"calendar_date_picker"}>{props.date.getDate()}/{props.date.getMonth() + 1}/{props.date.getFullYear()}</span>
            {calendarVisibility &&
                <Calendar onChange={props.setDate} value={props.date}/>
            }
            <Row sm={3}>
                {reportInfoCards.map(displayReportInfoCards)}
            </Row>
            <LineChart data = {props.lineChartData}/>
            <BarChart data = {props.barChartData}/>

        </Container>
    )
}