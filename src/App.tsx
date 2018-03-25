import * as React from "react";
import "./App.css";
import {GridCompnent} from "./components/grid/grid.compnent";
import * as fb from 'firebase';

class App extends React.Component {
    public state = {
          showDiv: true
    };

    constructor(public props) {
        super(props);
    }

    public async componentDidMount(): Promise<any> {

        fb.database().goOnline();

    }
    public clickHandler(busNumber: string): void {
        this.setState({
            showDiv: !this.state.showDiv
        });
    }

    render() {
        return (
            <div className="App container">
                <div>
                    Header
                </div>
                <div>
                    INFO Component
                </div>
                <GridCompnent/>
                <div>
                    Footer
                </div>
            </div>
        );
    }
}

export default App;
