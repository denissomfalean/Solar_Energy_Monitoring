import {Card} from "react-bootstrap";

export const ReportInfoCard = (props) => {
    return(
        <Card className={"report-info-card"}>
            <Card.Body>

                <p className={"underlined"}>{props.paragraphText}</p>

                {props.data.map((record,index) =>(
                    <div className={"d-flex justify-content-end"} key={"report-info-card="+index}>
                        {props.icons[index]}
                        <h5 className={"report-info-card-text"}>{record.value + record.measurementUnit}</h5>
                    </div>
                ))}

            </Card.Body>
        </Card>
    )
}