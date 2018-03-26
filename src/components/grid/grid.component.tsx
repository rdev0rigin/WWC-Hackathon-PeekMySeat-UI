import * as React from 'react';
import { onSeatChange$ } from '../../services/firebase.service';
import { SeatComponent } from './seat.component';
import { Subscription } from '@reactivex/rxjs';
import { ReactElement } from 'react';

interface GridComponentState {
    seats: {
        [id: string]: {
            type: string;
            occupied: boolean;
        };
    };
}

interface GridComponentProps {}

export class GridComponent extends React.Component<GridComponentProps, GridComponentState> {
    public state: GridComponentState = {
        seats: {}
    };
    private subscriptions: Subscription;

    public componentDidMount(): void {
        this.subscriptions = onSeatChange$()
            .subscribe((update: {}) => {
                this.setState({
                    seats: update
                });
            });
    }

    public componentWillUnmount(): void {
        this.subscriptions.unsubscribe();
    }

    public render(): ReactElement<HTMLDivElement> {
        return(
            <div
                className="grid-component"
            >
                <div
                    className="grid_left"
                >
                    {this.renderLeftSeats()}
                </div>
                <div
                    className="grid_right"
                >
                    {this.renderRightSeats()}
                </div>
            </div>
        );
    }

    private renderRightSeats(): ReactElement<HTMLDivElement>[] {
        const seatIDs: string[] = Object.keys(this.state.seats);
        let rightSeats: ReactElement<HTMLDivElement>[] = [];

        for (let i = 0; i < seatIDs.length; i++) {
            rightSeats = i % 2 !== 0
                ? rightSeats.concat(
                    (
                        <SeatComponent
                            key={seatIDs[i]}
                            id={seatIDs[i]}
                            type={this.state.seats[seatIDs[i]].type}
                            occupied={this.state.seats[seatIDs[i]].occupied}
                        />
                    )
                )
                : rightSeats;
        }
        return rightSeats;
    }

    private renderLeftSeats(): ReactElement<HTMLDivElement>[] {
        const seatIDs: string[] = Object.keys(this.state.seats);
        let leftSeats: ReactElement<HTMLDivElement>[] = [];

        for (let i = 0; i < seatIDs.length; i++) {
            leftSeats = i % 2 === 0
                ? leftSeats.concat(
                    (
                        <SeatComponent
                            key={seatIDs[i]}
                            id={seatIDs[i]}
                            type={this.state.seats[seatIDs[i]].type}
                            occupied={this.state.seats[seatIDs[i]].occupied}
                        />
                    )
                )
                : leftSeats;
        }
        return leftSeats;
    }
}
