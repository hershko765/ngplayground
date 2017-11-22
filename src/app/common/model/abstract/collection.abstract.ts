import { Injectable } from '@angular/core';
import {Model} from './model.abstract';

@Injectable()

export abstract class Collection {
    private models: Model;
}
