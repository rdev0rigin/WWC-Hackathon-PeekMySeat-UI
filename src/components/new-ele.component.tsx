import * as React from 'react';

export const ComponentEle = (props) => {

    // any logic
    const displayStyle = props.display ? 'block' : 'none';

    const tempNumber = 42;

    return (
        <div
            style={{"display": displayStyle}}
        >
            {tempNumber}
            <br/>
            {props.temp}
        </div>
    );
};
