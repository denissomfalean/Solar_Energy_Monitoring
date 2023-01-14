import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ReportInfoCard} from "../../components/reports/reportInfoCard/ReportInfoCard"
import './ReportLayoutStyle.css'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {LineChart} from "../../components/reports/LineChart";
import {BarChart} from "../../components/reports/BarChart";
import {types} from "../../resources/ReportsPageTypes"
import {BsCash} from "react-icons/bs";


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

            {props.pageType === types[3] &&

                <Row sm={3} style={{'padding-top':'10rem'}}>
                    <Col className={"p-3"} key={555}>
                        <ReportInfoCard
                            paragraphText="Selected Maximum Budget"
                            icons={[<BsCash/>]}
                            data={[{
                                value: 200,
                                measurementUnit:"RON"
                            }]}/>
                    </Col>
                </Row>

            }

            <LineChart data = {props.lineChartData}/>

            {props.pageType !== types[3] &&
            <BarChart data = {props.barChartData}/>
            }

        </Container>
    )
}