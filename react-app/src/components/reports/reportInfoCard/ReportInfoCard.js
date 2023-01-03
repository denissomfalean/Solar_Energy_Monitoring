import {Card} from "react-bootstrap";

export const ReportInfoCard = (props) => {
    return(
        <Card className={"report-info-card"}>
            <Card.Body>

                <p className={"underlined"}>{props.paragraphText}</p>

                {props.data.map((record,index) =>(
                    <div className={"d-flex justify-content-end"} key={"report-info-card="+index}>
                        <h4>{record.value + record.measurementUnit}</h4>
                        {props.icons[index]}
                    </div>
                ))}

            </Card.Body>
        </Card>
    )
}