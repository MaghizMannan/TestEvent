import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MultiSelectItemComponent } from './multi-select/multi-select-item/multi-select-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    MultiSelectItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
