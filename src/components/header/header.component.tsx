import * as React from 'react';
import {SVGS} from "../../assets/svgs.react";
import {ReactElement} from "react";

export const HeaderComponent = (props: any): ReactElement<HTMLDivElement> => {
    return (
        <div
            className="header-component"
        >
            <div
                className="logo-wrapper"
            >
                {SVGS.SEATPeeK}
                {SVGS.seatpEEk}
            </div>
        </div>
    )
};
