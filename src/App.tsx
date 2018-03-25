import * as React from "react";
import "./App.css";
import {GridCompnent} from "./components/grid.compnent";
import * as fb from 'firebase';
import * as firebase from 'firebase/app';
import {FIREBASE_CONFIG} from "./services/firebase.service";

// Initialize Firebase

const logo = require("./logo.svg");


class App extends React.Component {
    public state = {
          showDiv: true
    };

    constructor(public props) {
        super(props);
    }

    public async componentDidMount(): Promise<any> {
        firebase.initializeApp(FIREBASE_CONFIG);
        fb.database().goOnline();

    }
    public clickHandler(busNumber: string): void {
        this.setState({
            showDiv: !this.state.showDiv
        });
    }

    render() {
        return (
            <div className="App">
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
