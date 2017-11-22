import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  cars: String[] = [
    'Ford', 'Hyndai', 'Honda', 'Chevrolet', 'Mini'
  ];

  myData(): String {
    return 'This is my data man!';
  }

  getData (): String[] {
    return this.cars;
  }
}
