import {Observable, Observer} from '@reactivex/rxjs';
import * as fb from "firebase";

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDx4o2UW-UdKTVlO20JeALkFPaKHcWXw8E",
    authDomain: "seatpeek.firebaseapp.com",
    databaseURL: "https://seatpeek.firebaseio.com",
    projectId: "seatpeek",
    storageBucket: "seatpeek.appspot.com",
    messagingSenderId: "980121901535"
};

export function onSeatChange$(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
        fb.database().goOnline();
        fb.database().ref('/seats').on('value', (update) => {
            observer.next(update.val());
        });
    });
}
