import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',

})

export class CsvUploadComponent {
  tableheader = [];
  tabledata = [];
  constructor(private appService: AppService) {
  }
  convert(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      this.appService.convertCSV2Json(formData).subscribe(  (result: any) => {

        if (result.table) {
          this.tableheader = result.table.header;
          this.tabledata = result.table.lines;
        }

      });

    }

  }

}


