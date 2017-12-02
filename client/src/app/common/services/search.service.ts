import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  search(country: string){

    return  this.http.get('http://localhost:3000/data/' + country)
      .map(data => {
        return data.json();
      });

  }
}
