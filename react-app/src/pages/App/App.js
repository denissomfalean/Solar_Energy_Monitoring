import './App.css';
import {DevicesPage} from "../DevicesPage/DevicesPage";
import {ReportsPageBuilder} from "../Reports/ReportsPageBuilder";
import {types} from "../../resources/ReportsPageTypes"

const App = () => {
    return (
        <div className="App">
            <ReportsPageBuilder title={"Washing Machine"} pageType = {types[0]}/>
            {/*<DevicesPage/>*/}
        </div>
    );
}

export default App;
