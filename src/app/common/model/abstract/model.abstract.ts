import { Injectable } from '@angular/core';

@Injectable()

export abstract class Model {
    public set(property, value) {
        if (this[property]) {
            this[property] = value;
        }

        return this;
    }

    public get(property) {
        return this[property];
    }

    public setData(data: Object) {
        for (const property in data) {
            if (data.hasOwnProperty(property)) {
                this.set(property, data[property]);
            }
        }
    }
}
