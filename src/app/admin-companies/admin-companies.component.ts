import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.css']
})
export class AdminCompaniesComponent implements OnInit {
  empresas=JSON.parse(sessionStorage.getItem('empresas'));

  constructor() { }

  ngOnInit(): void {
    

}
}