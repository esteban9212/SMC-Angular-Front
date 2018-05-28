import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

	nameUser : string;

	constructor() { }

	ngOnInit() {
		this.nameUser = localStorage.getItem('name');
	  	this.nameUser = this.nameUser + " " + localStorage.getItem('last_name');
	  	this.nameUser.replace(/['"]+/g, '');
	  }

}
