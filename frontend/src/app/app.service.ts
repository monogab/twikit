import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  constructor(protected http: HttpClient) {
  }

  convertCSV2Json(formData) {
    return this.http.post(`/api/csv2json`, formData);
  }

}
