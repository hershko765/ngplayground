import { Injectable } from '@angular/core';
import {Model} from './abstract/model.abstract';

@Injectable()
export class UserModel extends Model {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
}
