import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Option } from '../shared/option.model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  @Input() options: Option[] = [];
  @Input() filter: boolean = false;
  @Input() filterBy: string = '';
  searchString:string = '';
  initialOptions: Option[] = [];
  @Output() onChange = new EventEmitter<Option[]>();
  selectedOptions: Option[] = [];
  

  constructor() { }

  ngOnInit(): void {
    this.initialOptions = this.options;
    let filterItem: string[] = this.filterBy.split(",");
    console.log(this.filterBy)
    if (this.filter && filterItem.length == 2) {
      this.options = this.options.filter(optionItem =>  (
        (
          optionItem.label.toLowerCase().includes(filterItem[0].trim().toLowerCase())
        ) && (
          optionItem.value.toLowerCase().includes(filterItem[1].trim().toLowerCase())
        )
      ));
    }
  }

  onOptionSelected(returnEl: {option: Option, checked: boolean}){
    if(returnEl.checked) {
      this.selectedOptions.push(returnEl.option)
    } else {
      this.selectedOptions.splice(this.selectedOptions.indexOf(returnEl.option), 1)
    }
    this.onChange.emit(this.selectedOptions)
  }

  singleFilterFlag (filterItem: string[], optionItem: Option) {
    return (
      (
        filterItem[0].trim().toLowerCase()=='label' && 
        optionItem.label.toLowerCase().includes(filterItem[1].trim().toLowerCase())
      ) || (
        filterItem[0].trim().toLowerCase()=='value' && 
        optionItem.value.toLowerCase().includes(filterItem[1].trim().toLowerCase())
      )
    );
  }

  filterFlag(filterItem: string[], optionItem: Option) {
    return (
      (
        filterItem[0].trim().toLowerCase()=='label' && 
        optionItem.label.toLowerCase().includes(filterItem[1].trim().toLowerCase())
      ) && (
        filterItem[0].trim().toLowerCase()=='value' && 
        optionItem.value.toLowerCase().includes(filterItem[1].trim().toLowerCase())
      )
    );
  }

  onSearch(){
    let newOptions: Option[] = []
    if(!!this.searchString){
      if(this.searchString.includes(',')){
        let filterValue: string[] = this.searchString.split(',')
        for (let optionItem of this.initialOptions) {
          let flag = true
          for (const filterItem of filterValue) {
            let filterIt: string[] = filterItem.split(':');
            flag = flag && this.filterFlag(filterIt, optionItem)
          }
          if (flag) {
            newOptions.push(optionItem);
          }
        }
        this.options = newOptions;
      } else {
        let filterValue: string[] = this.searchString.split(':')
        this.options = this.initialOptions.filter(item => this.singleFilterFlag(filterValue, item)
        );
      }
    } else {
      this.options = this.initialOptions;
    }
  }

}
