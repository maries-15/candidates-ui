import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    private sharedData: {};

    constructor() {
        this.sharedData = {
            isLoggedIn: false,
            user: null
        };
    }

    setSharedData(newData: {}): void {
        this.sharedData = Object.assign(this.sharedData, newData);
    }

    getSharedData(): {} {
        return this.sharedData;
    }
}
