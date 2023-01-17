import {useEffect, useState} from "react";
import {BsBarChartLine, BsCash, BsSun} from "react-icons/bs";
import {ReportLayout} from "../../layouts/reports/ReportLayout";
import '../../layouts/reports/ReportLayoutStyle.css'
import {SideNavigation} from "../../layouts/SideNavigation";
import {types} from "../../resources/ReportsPageTypes"
import {generateDailyData,generateWeeklyData,generateMontlyData,generateYearlyData,randomIntFromInterval} from "../../generator/data-generator"
import {
    getSelectedDeviceMaxConsumption,
    getSelectedDeviceTitle
} from "../../services/session/userService";

export const ReportsPageBuilder = (props) => {

    const [date, setDate] = useState(new Date());

    const makeTitle = ()=>{
        if (props.pageType===types[0]){
            return getSelectedDeviceTitle();
        }
        else return props.pageType;
    }

    const [title,setTitle] = useState(makeTitle())

    const makeMax = () =>{
        if (props.pageType===types[0]){
            return getSelectedDeviceMaxConsumption();
        }
        else return randomIntFromInterval(1,10);
    }

    const makeCards = () =>{

        let paragraphTextCard1 = "Max"
        let iconArrayCard1 = [<BsBarChartLine className={"card-icon"}/>]
        let dataArrayCard1 = [{
            value: makeMax(),
            measurementUnit:"kw/h"
        }]
        if(props.pageType === types[3]){
            iconArrayCard1 = [...iconArrayCard1,<BsCash className={"card-icon"}/>]
            dataArrayCard1 = [...dataArrayCard1,{
                value: randomIntFromInterval(1,5),
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

        let iconArrayCard2 = [<BsSun className={"card-icon"}/>],
            valueCard2 = [randomIntFromInterval(0,23) + "h " + randomIntFromInterval(1,59) +"min"],
            measurementUnitCard2 = "",
            paragraphTextCard2="On-time";

        if(props.pageType !== types[0]){

            iconArrayCard2 = [<BsBarChartLine className={"card-icon"}/>];
            valueCard2 = [randomIntFromInterval(1,5)]
            measurementUnitCard2 = ["kW"]

            props.pageType === types[1] ? paragraphTextCard2 = "Total consumption" : paragraphTextCard2 = "Total production"
            if(props.pageType === types[3]){
                measurementUnitCard2 = "kWh"
                paragraphTextCard2 = "Consumed from Grid"
                iconArrayCard2 = [...iconArrayCard2,<BsCash className={"card-icon"}/>]
            }
        }

        let dataArrayCard2 = [{
            value: valueCard2,
            measurementUnit:measurementUnitCard2
        },]
        if(props.pageType === types[3]) {
            dataArrayCard2 = [...dataArrayCard2, {
                value: randomIntFromInterval(1,5),
                measurementUnit: "RON/kWh"
            }]
        }
        let card2 = {
            id:1,
            paragraphText:paragraphTextCard2,
            data:dataArrayCard2,
            icons:iconArrayCard2
        }

        let iconArrayCard3 = [<BsCash className={"card-icon"}/>]
        let dataArrayCard3 = [{
            value: randomIntFromInterval(100,500),
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

        return props.pageType === types[2] ? ([card1,card2]) : ([card1,card2,card3])

    }
    const [cards,setCards] = useState(makeCards())


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
        if(props.pageType!==types[0]) {
            props.pageType === types[1] ? title = "Consumed Energy (kW)" : props.pageType === types[2] ? title = "Produced Energy (kW)" : title = "Energy Cost"
        }
            return title;

    }

    const [lineChartDatasetTitle,setLineChartDatasetTitle] = useState(makeLineChartDatasetTitle())

    const makeLineChartData = () =>{
        let labels = lineChartLabels;
        let values = generateDailyData(7).map(dailyData => dailyData.consumption);

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
                label: "Maximum cost per kwh",
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
        setCards(makeCards());
    },[date])

    useEffect(()=>{
        setLineChartData(makeLineChartData());
    },[lineChartLabels])

    const createBarChartDatasetTitle = () =>{
        let title = "Energy (kwh)";
        props.pageType === types[1] ? title = "Consumed Energy (kW)" : props.pageType === types[2] ? title = "Produced Energy (kW)" : title = "Energy Cost"
        return title;
    }

    const makeBarChartData = () =>{
        let weeklyData = generateWeeklyData();
        let monthlyData = generateMontlyData();
        let yearlyData = generateYearlyData();
        
        let weeklyDataLabels = weeklyData.map(entry=>entry.day);
        let monthlyDataLabels = monthlyData.map(entry=>entry.day);
        let yearlyDataLabels = yearlyData.map(entry=>entry.month);

        let weeklyDataValues = weeklyData.map(entry=>entry.consumption);
        let monthlyDataValues = monthlyData.map(entry=>entry.consumption);
        let yearlyDataValues = yearlyData.map(entry=>entry.consumption);

        let barChartDatasetTitle = createBarChartDatasetTitle();
        let barChartBackgroundColor = 'rgb(255, 200, 0)';

        let labels = weeklyDataLabels;
        let barChartWeeklyDataForReportLayout = {
            labels,
            datasets: [
                {
                    label: barChartDatasetTitle,
                    data: weeklyDataValues,
                    backgroundColor: barChartBackgroundColor,
                }
            ],
        };
        labels = monthlyDataLabels;
        let barChartMonthlyDataForReportLayout = {
            labels,
            datasets: [
                {
                    label: barChartDatasetTitle,
                    data: monthlyDataValues,
                    backgroundColor: barChartBackgroundColor,
                }
            ],
        };
        labels = yearlyDataLabels;
        let barChartYearlyDataForReportLayout = {
            labels,
            datasets: [
                {
                    label: barChartDatasetTitle,
                    data: yearlyDataValues,
                    backgroundColor: barChartBackgroundColor,
                }
            ],
        };

        return {
            weekly:barChartWeeklyDataForReportLayout,
            monthly:barChartMonthlyDataForReportLayout,
            yearly:barChartYearlyDataForReportLayout
        };
    }

    const [barChartData,setBarChartData] = useState(makeBarChartData());


    return(
    <>
        <SideNavigation/>
        <div className={"content flex justify-content-center align-items-center"}>
            <ReportLayout title = {title} reportInfoCards = {cards} pageType = {props.pageType} lineChartData = {lineChartData} barChartData = {barChartData} date = {date} setDate = {setDate}/>
        </div>
    </>
    )
}