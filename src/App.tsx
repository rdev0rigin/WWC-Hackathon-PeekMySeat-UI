import * as React from "react";
import "./App.css";
import { GridCompnent } from './components/grid/grid.compnent';
import {HeaderComponent} from "./components/header/header.component";
import {InfoComponent} from "./components/info/info.component";

class App extends React.Component {
    render() {
        return (
            <div className="App container">
                <HeaderComponent/>
                <InfoComponent

                />
                <GridCompnent/>
            </div>
        );
    }
}

export default App;
