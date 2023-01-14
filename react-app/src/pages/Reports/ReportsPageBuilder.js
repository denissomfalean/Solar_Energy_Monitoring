import {useEffect, useState} from "react";
import {BsBarChartLine, BsCash, BsSun} from "react-icons/bs";
import {ReportLayout} from "../../layouts/reports/ReportLayout";
import {SideNavigation} from "../../layouts/SideNavigation";
import {types} from "../../resources/ReportsPageTypes"
import {generateDailyData} from "../../generator/data-generator"

export const ReportsPageBuilder = (props) => {

    const [cards,setCards] = useState([])
    const [title,setTitle] = useState(props.title)
    const [date, setDate] = useState(new Date());

    const makeLineChartLabels = () =>{

        let currentDate = new Date()
        let lastHour = currentDate.getHours()
        // console.log("last hour: " + lastHour);
        // console.log("selected: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear())
        // console.log("now: " + currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear())
        if(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() !== currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear() )
        {
            //console.log("yes")
            lastHour = 24
        }

        return [lastHour-6+":00",lastHour-5+":00",lastHour-4+":00",lastHour-3+":00",
            lastHour-2+":00",lastHour-1+":00",lastHour+":00"]

    }

    const [lineChartLabels,setLineChartLabels] = useState(makeLineChartLabels())

    const makeLineChartDatasetTitle = () =>{

        let title = "Max Energy (kwh)";
        props.pageType === types[1] ? title = "Consumed Energy (kW)" : props.pageType === types[2] ? title = "Produced Energy (kW)" : "Energy Cost"
        return title;

    }

    const [lineChartDatasetTitle,setLineChartDatasetTitle] = useState(makeLineChartDatasetTitle())

    const makeLineChartData = () =>{
        let labels = lineChartLabels;
        let values = generateDailyData.map(dailyData => dailyData.consumption);

        let lineChartDataForReportLayout = {
            labels,
            datasets: [
                {
                    label: lineChartDatasetTitle,
                    data: values,
                    borderColor: 'rgb(255, 200, 0)',
                    backgroundColor: 'rgba(0, 0, 255, 0.5)',
                }
            ],
        };
        if(props.pageType === types[3]){
            lineChartDataForReportLayout.datasets = [...lineChartDataForReportLayout.datasets,{
                label: props.lineChartData.datasetTitle,
                data: [5,5,5,5,5,5,5],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }]
        }
        return lineChartDataForReportLayout
    }

    const [lineChartData,setLineChartData] = useState(makeLineChartData)

    useEffect(()=>{
        setLineChartLabels(makeLineChartLabels())
    },[date])

    useEffect(()=>{
        setLineChartData(makeLineChartData());
    },[lineChartLabels])

    const makeCards = () =>{

        let paragraphTextCard1 = "Max"
        let iconArrayCard1 = [<BsBarChartLine/>]
        let dataArrayCard1 = [{
            value: 2.5,
            measurementUnit:"kw/h"
        }]
        if(props.pageType === types[3]){
            iconArrayCard1 = [...iconArrayCard1,<BsCash/>]
            dataArrayCard1 = [...dataArrayCard1,{
                value: 0.91,
                measurementUnit:"RON/kWh"
            }]
            paragraphTextCard1 = "Feed-in grid"
        }

        let card1 = {
            id:0,
            paragraphText:paragraphTextCard1,
            data:dataArrayCard1,
            icons:iconArrayCard1
        }

        let iconArrayCard2 = [<BsSun/>],
            valueCard2 = ["4h 32min"],
            measurementUnitCard2 = "",
            paragraphTextCard2="On-time";

        if(props.pageType !== types[0]){

            iconArrayCard2 = [<BsBarChartLine/>];
            valueCard2 = [500]
            measurementUnitCard2 = ["kW"]

            props.pageType === types[1] ? paragraphTextCard2 = "Total consumption" : paragraphTextCard2 = "Total production"
            if(props.pageType === types[3]){
                measurementUnitCard2 = "kWh"
                paragraphTextCard2 = "Consumed from Grid"
                iconArrayCard2 = [...iconArrayCard2,<BsCash/>]
            }
        }

        let dataArrayCard2 = [{
            value: valueCard2,
            measurementUnit:measurementUnitCard2
        },]
        if(props.pageType === types[3]) {
            dataArrayCard2 = [...dataArrayCard2, {
                value: 1.75,
                measurementUnit: "RON/kWh"
            }]
        }
        let card2 = {
            id:1,
            paragraphText:paragraphTextCard2,
            data:dataArrayCard2,
            icons:iconArrayCard2
        }

        let iconArrayCard3 = [<BsCash/>]
        let dataArrayCard3 = [{
            value: 200,
            measurementUnit:"RON"
        },]

        let paragraphTextCard3 = "Avg cost"
        if(props.pageType === types[3]) {
            paragraphTextCard3 = "Estimated cost"
        }
        let card3 = {
            id:1,
            paragraphText:paragraphTextCard3,
            data:dataArrayCard3,
            icons:iconArrayCard3
        }

        props.pageType === types[2] ? setCards([card1,card2]) : setCards([card1,card2,card3])

    }

    useEffect(()=>
    {
        makeCards()
    },[])

    return(
    <>

        <SideNavigation/>
        <div className={"content flex justify-content-center align-items-center"}>
            <ReportLayout title = {title} reportInfoCards = {cards} pageType = {props.pageType} lineChartData = {lineChartData} date = {date} setDate = {setDate}/>
        </div>

    </>
    )
}