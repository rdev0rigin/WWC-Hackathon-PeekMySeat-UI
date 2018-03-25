import * as React from 'react';
import { onSeatChange$ } from "../services/firebase.service";
import { Subscription } from '@reactivex/rxjs';
import {ReactElement} from "react";
import {SeatComponent} from "./seat.component";

export class GridCompnent extends React.Component {
    public state: any = {
        seats: {}
    };
    private subscriptions: Subscription;

    public componentDidMount(): void {
        this.subscriptions = onSeatChange$()
            .subscribe((update: any) => {
                this.setState({
                    seats: update
                });
            });
    }

    public componentWillUnmount(): void {
        this.subscriptions.unsubscribe();
    }

    public render() {
        return(
            <div
                className="grid-component"
            >
                I am a grid component.
            </div>
        );
    }

    private renderSeats(): ReactElement<HTMLDivElement> {
        return this.state.seats.map((seat: any) => {
            return (
                <SeatComponent
                    {...seat}
                />
            )
        });
    }

}
