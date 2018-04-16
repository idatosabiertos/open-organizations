import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {map, startWith} from "rxjs/operators";
import {SearchService} from "../../common/services/search.service";
import {CountryService} from "../../common/services/country.service";

@Component({
  selector: 'app-home.view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.css']
})
export class HomeViewComponent implements OnInit {

  latitude: number = 0;
  longitude: number = 0;
  //
  countryInput: FormControl;
  stateCtrl: FormControl;
  //
  country: string;
  organizations: any = [];

  markers: any = [];
  countriesFiltered: Observable<any[]>;
  loadingCountries: boolean = true;

  filteredStates: Observable<any[]>;

  countries: any = [];

  constructor(private searchService: SearchService, private countryService: CountryService) {
    this.stateCtrl = new FormControl();
    /*this.countriesFiltered = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this.filterCountries(country) : this.countries.slice())
      );
*/
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterCountries(state) : this.countries.slice())
      );
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries().subscribe(
      data => {
        this.countries = data;
        this.loadingCountries = false;
      },
      error => {
      }
    )
  }

  searchOrganizations() {

    let homeView = this;

    let country = this.countries.filter(function (country) {
      return country.name == homeView.country;
    })[0];

    homeView.latitude = country.latitude;
    homeView.longitude = country.longitude;


    this.searchService.search(this.country).subscribe(
      data => {
        this.organizations = data;
        this.markers = data.map(function (m) {
          let marker: any = {}
          marker.lat = m.geometry.coordinates[1];
          marker.lng = m.geometry.coordinates[0];
          marker.label = m.fields.code_es;
          marker.draggable = true;
          marker.icon = {
            url: 'https://i.pinimg.com/originals/e6/4e/55/e64e5504551b43a35eef9b3a17056804.png', // gives a data://<value>
            scaledSize: {
              height: 40,
              width: 40
            }
          };
          marker.title = m.fields.name;
          marker.country = m.fields.country;
          marker.url = m.fields.url;
          marker.organization = m.fields.organisation;
          return marker;
        });

      }
    );


  }

  filterCountries(name: string) {
    return this.countries.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onCountrySelected(event) {
    this.country = event.option.value;
    //this.searchOrganizations();
  }
}
