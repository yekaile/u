import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosGetService {

  api: string;
  result: any;

  constructor(api: string) {
    this.api = api;
    this.result = null;
  }

  get(): any {
    axios.post(this.api).then(res => {
      this.result = JSON.stringify(res);
    });
    return this.result;
  }
}

