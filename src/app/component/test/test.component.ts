import {Component, OnInit} from '@angular/core';
import {AxiosGetService} from '../../services/axios-get.service';
import axios from 'axios';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  arr = [1, 2, 3, 4, 5];
  selectNumber: number;
  api: any = 'http://localhost:8080/q_war_exploded/Test';
  service: AxiosGetService;
  words: any = null;
  url: any = '../../../assets/';
  num: any;

  constructor() {
  }

  ngOnInit() {

  }

  onSelect(n): void {
    this.selectNumber = n;
  }

  submit(): void {
    const params = new URLSearchParams();
    params.append('message', this.words);
    axios.post(this.api, params, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(res => {
      this.url = this.url + res.data;
      this.num = 1;
      console.log(this.url);
    });
  }
}
