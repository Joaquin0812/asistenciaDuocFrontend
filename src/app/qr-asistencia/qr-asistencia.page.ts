import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-asistencia',
  templateUrl: './qr-asistencia.page.html',
  styleUrls: ['./qr-asistencia.page.scss'],
})
export class QrAsistenciaPage implements OnInit {

  constructor(public router:Router, public nav:NavController) { }

  submitBack=()=>{
    this.nav.navigateForward("profesor")
  }
  
  ngOnInit() {
  }

}
