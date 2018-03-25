import * as React from 'react';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App container">
                <HeaderComponent />
                <InfoComponent />
                <GridComponent />
            </div>
        );
    }
}

export default App;
