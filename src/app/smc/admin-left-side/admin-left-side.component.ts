import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {

	nameUser : string;

  constructor() { }

  ngOnInit() {

  	this.nameUser = localStorage.getItem('name').toString();
  	this.nameUser = this.nameUser + " " + localStorage.getItem('last_name');
  	this.nameUser.replace(/['"]+/g, '');

  }

}
