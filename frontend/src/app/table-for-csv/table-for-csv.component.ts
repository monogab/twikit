import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-for-csv',
  templateUrl: './table-for-csv.component.html',

})

export class TableForCsvComponent implements OnInit, OnChanges {

  @Input('header') header;
  @Input('lines') lines;
  constructor() {

  }

  ngOnInit() {

  }
  ngOnChanges() {
  }

}
