import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

form: FormGroup = new FormGroup({})  
  mail:string=""
  pass:string=""
  error:boolean=false
  
constructor(public nav:NavController, public authService:AuthService, private fb:FormBuilder) {
  console.log("Bienvenido a la APP");
  
}

submitForm=()=>{
  this.authService.login(this.mail, this.pass).catch(()=>{this.error=true})
}
  
}