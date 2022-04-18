import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DialogModule} from "primeng/dialog";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SpreadsheetAllModule} from "@syncfusion/ej2-angular-spreadsheet";
// import {DropDownButtonModule} from "@syncfusion/ej2-angular-splitbuttons";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    DialogModule,
    CommonModule,
    MatToolbarModule,
    // DropDownButtonModule,
    SpreadsheetAllModule,
    RouterModule,
    AccordionModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
