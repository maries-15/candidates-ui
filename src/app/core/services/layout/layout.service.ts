import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    private sharedData: {};

    constructor() {
        this.sharedData = {
            headerImage: 'url'
        };
    }

    setSharedDate(newData: {}): void {
        this.sharedData = {...this.sharedData, ...newData };
    }

    getSharedData(): {} {
        return this.sharedData;
    }
}
