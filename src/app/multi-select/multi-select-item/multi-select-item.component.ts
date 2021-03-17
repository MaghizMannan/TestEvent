import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Option } from 'src/app/shared/option.model';

@Component({
  selector: 'app-multi-select-item',
  templateUrl: './multi-select-item.component.html',
  styleUrls: ['./multi-select-item.component.css']
})
export class MultiSelectItemComponent implements OnInit {
  @Input() option: Option = new Option("", "");
  @Output() optionSelected = new EventEmitter<{option: Option, checked: boolean}>();
  checked: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.checked = !this.checked;
    this.optionSelected.emit({option: this.option, checked: this.checked});
  }

}
