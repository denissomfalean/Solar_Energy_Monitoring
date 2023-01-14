import './App.css';
import {DevicesPage} from "../DevicesPage/DevicesPage";
import {ReportsPageBuilder} from "../Reports/ReportsPageBuilder";
import {types} from "../../resources/ReportsPageTypes"

const App = () => {
    const values = [2,3,4,10,4,5,15]
    const singleDeviceLineChartData = {
        datasetTitle:"Max Energy (kwh)",
        values:values
    }
    return (
        <div className="App">
            <ReportsPageBuilder title={"Washing Machine"} pageType = {types[3]} lineChartData = {singleDeviceLineChartData}/>
            {/*<DevicesPage/>*/}
        </div>
    );
}

export default App;
