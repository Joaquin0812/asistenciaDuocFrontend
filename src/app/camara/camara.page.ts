import { Component, OnInit, EventEmitter } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  scanSuccess: EventEmitter<string>;

  alumno:any
  constructor() {
    this.scanSuccess = new EventEmitter();
    const alu: string | null = localStorage.getItem("alu")
    if (alu !== null) {
      const alumno = JSON.parse(alu)
      this.alumno = alumno
    }
  }

  ngOnInit() {
  }

  tuEvento(event: any) {
    console.log(event)
    console.log('Asistencia actualizada')
    this.actualizarAsistencia()
 }
  

  // Método para actualizar la asistencia 
  actualizarAsistencia() {  
    fetch(`https://computational-curtis-linking-extensions.trycloudflare.com/asistencia?rut=${this.alumno.rut_alumno}`,{ method: 'PATCH' })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
}
