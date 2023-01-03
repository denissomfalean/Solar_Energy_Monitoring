import './App.css';
import {DevicesPage} from "../DevicesPage/DevicesPage";
import {SingleDevice} from "../SingleDeviceInfo/SingleDevice";

const App = () => {
    const values = [2,3,4,10,4,5,15]
    const singleDeviceLineChartData = {
        datasetTitle:"Max Energy (kwh)",
        values:values
    }
    return (
        <div className="App">
            {/*<SingleDevice title={"Washing Machine"} lineChartData = {singleDeviceLineChartData}/>*/}
            <DevicesPage/>
        </div>
    );
}

export default App;
