import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.page.html',
  styleUrls: ['./lista-de-alumnos.page.scss'],
})
export class ListaDeAlumnosPage implements OnInit {
  alumnos: any[]=[]

  constructor(public router:Router, public nav:NavController) { }

  submitBack=()=>{
    this.nav.navigateForward("profesor")
  }

  ngOnInit() {

    const correo = localStorage.getItem("correo")
    
    var requestOptions = {
      method: 'GET'
    };
    
    fetch(`https://x9079c3d-3000.brs.devtunnels.ms/lista?correo=${correo}`, requestOptions)
      .then(async response => {
        const lista = await response.json()
        console.log(lista);
        this.alumnos=lista
        
      })
      .catch(error => console.log('error', error));
  }

}
