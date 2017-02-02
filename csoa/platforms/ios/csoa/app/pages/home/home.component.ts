import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "home",
  templateUrl: "pages/home/home.html",
  styleUrls: ["pages/home/home-common.css", "pages/home/home.css"]
})

export class HomeComponent {

    constructor(private router : Router){
        
    }

    goToListPage(){
        this.router.navigate(["/list"]);
    }
}