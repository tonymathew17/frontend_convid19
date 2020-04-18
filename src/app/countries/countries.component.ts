import { Component, OnInit } from '@angular/core';

import { Covid19Service } from '../services/get-covid19-data';

@Component({
    selector: 'app-contries',
    templateUrl: 'countries.component.html',
    styleUrls: ['countries.component.css']
})

export class CountriesComponent implements OnInit {

    constructor(private covid19Service: Covid19Service) { }

    countries: Array<string> = [];
    countriesCount: Number;

    ngOnInit() {
        this.covid19Service.getCountries().subscribe(data => {
            this.countriesCount = data['affectedCountries'];
            this.countries = data['countries'];
        });
    }
}