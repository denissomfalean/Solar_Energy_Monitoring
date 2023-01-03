import {useEffect, useState} from "react";
import {BsBarChartLine, BsCash} from "react-icons/bs";
import {ReportLayout} from "../../layouts/reports/ReportLayout";
import {SideNavigation} from "../../layouts/SideNavigation";

export const SingleDevice = (props) => {

    const [cards,setCards] = useState([])
    const [title,setTitle] = useState(props.title)
    const [date, setDate] = useState(new Date());

    const makeLabels = () =>{

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

    const [labels,setLabels] = useState(makeLabels)

    const makeData = () =>{
        return {
            labels,
            datasets: [
                {
                    label: props.lineChartData.datasetTitle,
                    data: props.lineChartData.values,
                    borderColor: 'rgb(255, 200, 0)',
                    backgroundColor: 'rgba(0, 0, 255, 0.5)',
                }
            ],
        };
    }

    const [data,setData] = useState(makeData)



    useEffect(()=>{
        setLabels(makeLabels())
    },[date])

    useEffect(()=>{
        setData(makeData());
    },[labels])



    const makeCards = () =>{

        let iconArray = [<BsBarChartLine/>,<BsCash/>]
        let dataArray = [{
            value: 2.5,
            measurementUnit:"kw/h"
        },{
            value: 200,
            measurementUnit:"RON"
        }]

        let card0 = {
            id:0,
            paragraphText:"Max",
            data:dataArray,
            icons:iconArray
        }

        let iconArray2 = [<BsCash/>,<BsBarChartLine/>]
        let dataArray2 = [{
            value: 5,
            measurementUnit:"kw/h"
        },{
            value: 300,
            measurementUnit:"RON"
        }]

        let card1 = {
            id:1,
            paragraphText:"Max",
            data:dataArray2,
            icons:iconArray2
        }
        setCards([card0,card1])

    }

    useEffect(()=>
    {
        makeCards()
    },[])

    return(
    <>

        <SideNavigation/>
        <div className={"content flex justify-content-center align-items-center"}>
            <ReportLayout title = {title} reportInfoCards = {cards} lineChartData = {data} date = {date} setDate = {setDate}/>
        </div>

    </>
    )
}