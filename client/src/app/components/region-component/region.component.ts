import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'region-component',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  @Input() countries: any;
  regions: any;

  constructor() { }

  ngOnInit() {
    let regions = {};
    for(let i = 0; i < this.countries.length; i++){
      let country = this.countries[i];
      let region = regions[country.region_code];
      if(region){
        region.countries.push(country);
      }
      else{
        regions[country.region_code] = {
          regionCode: country.region_code,
          regionEs: country.region_es,
          countries: [country]
        }
      }
    }

    this.regions = Object.values(regions);
  }

}
