import { Component, OnInit } from '@angular/core';
import { Option } from './shared/option.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countries: Option[] = [
    new Option("India", "IN"),
    new Option("France", "FR"),
    new Option("Germany", "GR")
  ];
  
  ngOnInit() {
  }

  onChange(selectedOptions: Option[]) {
    selectedOptions.forEach(option => console.log(option.value, option.label))
  }

}
