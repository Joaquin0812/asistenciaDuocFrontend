import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  constructor() {}

  ngOnInit() {
  }

  // Método para actualizar la asistencia
  actualizarAsistencia(rut: string) {  
    fetch(`https://computational-curtis-linking-extensions.trycloudflare.com/asistencia?rut=${rut}`,)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
}
