import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

	nameUser : string;
	foto : string = "https://qualiscare.com/wp-content/uploads/2017/08/default-user.png";

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
		this.nameUser = localStorage.getItem('name').slice(1, -1);
	  	this.nameUser = this.nameUser + " " + localStorage.getItem('last_name').slice(1, -1);

	var idUser = localStorage.getItem('ID_USER')

    console.log(idUser);

  	if(idUser === "2813"){
  		this.foto = "https://www.icesi.edu.co/solicitud_servicios/images/img_user.php?cedula=10546071";
  	}

  	if(idUser === "5000"){
  		this.foto = "https://conf.researchr.org/getProfileImage/norhavillegas/6b2f298e-31de-44b1-bce8-74e0ada75502/small.jpg?1507858768000";
  	}
	  }

	logout(){
		console.log("puto el que lo lea");
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/auth/signin']);
 	}

}
