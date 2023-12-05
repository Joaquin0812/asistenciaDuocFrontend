import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  alumno:any=""
  constructor(public router:Router, public nav:NavController) {
    this.alumno=this.router.getCurrentNavigation()?.extras.state
    this.alumno.nombre=(this.alumno.nombre as string).toUpperCase()
    console.log(this.alumno);
    
  }

  submitForm=()=>{
    this.nav.navigateForward("home")
  }

  submitCamara=()=>{
    this.nav.navigateForward("alumno/camara")
  }

  ngOnInit() {
  }

}
