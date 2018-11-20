import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsvUploadComponent} from './csv-upload/csv-upload.component';
import { TableForCsvComponent } from './table-for-csv/table-for-csv.component';
import { AppService } from './app.service';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CsvUploadComponent,
    TableForCsvComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
