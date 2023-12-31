// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public nav: NavController) { }

  login(username: string, password: string): Promise<boolean> {
    // Simula un proceso de inicio de sesión
    return new Promise(async (resolve, reject) => {
      // Comprueba si las credenciales son válidas
      const resultado: any = await this.autenticacion(username, password);
      console.log(resultado);

      if (resultado === null) {
        console.log("resultado igual null");

        reject('Credenciales incorrectas')
      } else {
        const dominio = username.split("@")[1]
        if (dominio == "duoc.cl") {
          localStorage.setItem("user", "alumno")
          const nombre = resultado.nombre
          this.nav.navigateForward("alumno", { state: { nombre: nombre, correo: username } })

        } else if (dominio == "profesor.duoc.cl") {
          localStorage.setItem("user", "profesor")
          const nombre = resultado.nombre
          this.nav.navigateForward("profesor", { state: { nombre: nombre, correo: username } })
        }
        localStorage.setItem("correo",resultado.correo)
        resolve(true);
      }
    });
  }
  logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("correo")
  }

  isAuthenticatedUser() {
    return localStorage.getItem("user") !== null;
  }

  getUserType() {
    return localStorage.getItem("user")
  }

  async autenticacion(username: string, password: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": username,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    const response = await fetch("https://computational-curtis-linking-extensions.trycloudflare.com/login", requestOptions)
    if (response) {
      const estado = response.status
      console.log(response);

      if (estado == 200) {
        console.log("estado es igual 200");
        const als=await response.json();
        localStorage.setItem("alu",JSON.stringify(als))
        console.log(als);
        return als

      }
    }
    return null
  }
}
