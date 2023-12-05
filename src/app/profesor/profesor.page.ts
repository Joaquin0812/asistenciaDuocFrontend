import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  profesor: any = ""
  constructor(public router:Router, public nav:NavController) {
    this.profesor = this.router.getCurrentNavigation()?.extras.state
    console.log(this.profesor);
    this.profesor.nombre = (this.profesor.nombre as string).toUpperCase()
  }

  submitForm=()=>{
    this.nav.navigateForward("home")
  }

  submitLista=()=>{
    this.nav.navigateForward("profesor/lista-de-alumnos")
  }

  submitQr=()=>{
    this.nav.navigateForward("profesor/qr-asistencia")
  }

  ngOnInit() {
  }

}
