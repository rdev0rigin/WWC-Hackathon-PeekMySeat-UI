import * as React from "react";
import {SVGS} from "../../assets/svgs.react";

interface SeatComponentProps {
    type: string;
    occupied: boolean;
}

export const SeatComponent = (props: SeatComponentProps) => {
    console.log('props', props);
    const occupiedStyle = props.occupied
        ? 'occupied'
        : '';

    return (
        <div
            className="seat-component"
        >
            {props.type === 'handicap'
                ? (
                <div
                    className={'icon-wrapper ' + occupiedStyle}
                >
                    {SVGS.circle}
                    <div
                        className='handicap-wrapper'
                    >
                        {SVGS.handicap}
                    </div>
                    {props.occupied ? SVGS.cross : ''}
                </div>
            ) : (
                <div
                    className={'icon-wrapper ' + occupiedStyle}
                >
                    {SVGS.circle}
                    {props.occupied ? SVGS.cross : ''}
                </div>
            )}
        </div>
    );
};
