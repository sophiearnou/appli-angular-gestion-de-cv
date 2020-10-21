import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PremierService {
  data = ['data1', 'data2', 'data3', 'data4'];
  constructor() {}
  // tslint:disable-next-line: typedef
  logger(data) {
    console.log(data);
  }
  addData(data) {
    this.data.push(data);
  }
}
