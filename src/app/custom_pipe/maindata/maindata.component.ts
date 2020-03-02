import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maindata',
  templateUrl: './maindata.component.html',
  styleUrls: ['./maindata.component.css']
})
export class MaindataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emoployees = [
    {empname:"subramanyam",gender:"1",salary:"60k"},
    {empname:"ismail",gender:"1",salary:"60k"},
    {empname:"bikash",gender:"0",salary:"60k"},
    {empname:"mounika",gender:"0",salary:"60k"}
  ]

}
