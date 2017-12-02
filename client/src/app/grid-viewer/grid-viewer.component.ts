import { Component, OnInit } from '@angular/core';
import {SearchService} from "../common/services/search.service";

@Component({
  selector: 'app-grid-viewer',
  templateUrl: './grid-viewer.component.html'
})
export class GridViewerComponent implements OnInit {

  country: string;
  organizations: any = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchOrganizations(){


    this.searchService.search(this.country).subscribe(
      data => {
        this.organizations = data;
        console.log("I CANT SEE DATA HERE: ", this.organizations);
      }
    );
  }
}
