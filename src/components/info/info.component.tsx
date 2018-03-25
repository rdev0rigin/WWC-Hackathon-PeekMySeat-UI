import * as React from 'react';
import { ReactElement } from 'react';
import { SVGS } from '../../assets/svgs.react';
import { Subscription } from '@reactivex/rxjs';
import { onSeatChange$ } from '../../services/firebase.service';

interface InfoComponentState {
    dataReady: boolean;
    percentFull: string;
}

interface InfoComponentProps {}

export class InfoComponent extends React.Component<InfoComponentProps, InfoComponentState> {
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
                    <b>
                        {this.state.dataReady
                            ? `${this.state.percentFull}% full`
                            : `Calculating capacity!`
                        }
                    </b>
                </div>
            </div>
        );
    }

    private percentFull = (seats: {}): string => {
        const seatIDs: string[] = Object.keys(seats);
        const total: number = seatIDs.length;
        let occupied: {}[] = [];

        for (let seatId of seatIDs) {
            if (seats[seatId].occupied) {
                occupied = occupied.concat(seats[seatId]);
            }
        }
        return Math.trunc((occupied.length / total) * 100).toString();
    }
}
