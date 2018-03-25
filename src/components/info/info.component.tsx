import * as React from "react";
import {SVGS} from "../../assets/svgs.react";
import {Subscription} from '@reactivex/rxjs';
import {onSeatChange$} from "../../services/firebase.service";
import {ReactElement} from "react";

export class InfoComponent extends React.Component {
    public state = {
        dataReady: false,
        percentFull: 'calculating'
    };
    private subscriptions: Subscription;

    public componentDidMount(): void {
        this.subscriptions = onSeatChange$().subscribe(update => {
            const percentFull: string = this.percentFull(update);
            this.setState({
                percentFull: percentFull,
                dataReady: true
            });
        });
    }

    public componentWillUnmount(): void {
        this.subscriptions.unsubscribe();
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div
                className="info-component"
            >
                <div
                    className="left"
                >
                    {SVGS.bus}
                </div>
                <div
                    className="right"
                >
                   <h3>
                       {this.state.dataReady
                            ? `This bus is ${this.state.percentFull}% full.`
                            : `Calculating capacity!`
                        }
                   </h3>
                </div>
            </div>
        );
    }

    private percentFull = (seats: {}) => {
        const seatIDs: string[] = Object.keys(seats);
        const total: number = seatIDs.length;
        let occupied: any[] = [];
        for (let seatId of seatIDs) {
            if (seats[seatId].occupied) {
                occupied = occupied.concat(seats[seatId]);
            }
        }

        return Math.trunc((occupied.length / total) * 100).toString();
    };
}
