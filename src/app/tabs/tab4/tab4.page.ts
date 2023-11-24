import { Component, OnInit } from '@angular/core';
import { IonLabel } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
 //numero aleatorio creado al principio al lanzar la aplicacion
  numAle: number= 0;
  numUsu: number = 0;
  mensaje: string = "";
  

  constructor() { }

  onClick(){
    console.log(this.numAle);
    console.log(this.numAle);
   this.comprobarNumAle();
  }
  //función que se ejecuta unicamente una vez al inicio de la aplicacion
  ngOnInit() {
    this.generarNumAle();
  }
  generarNumAle(){
  // Math.floor(Math.random() * 100) + 1;
  this.numAle = Math.floor(Math.random() * 101);
   return  this.numAle;
    
  }
  comprobarNumAle(){
    if (this.numUsu == this.numAle) {
      this.mensaje = "¡Has acertado!";
    } else if (this.numUsu < this.numAle) {
      this.mensaje = "Introduce un número mayor.";
    } else {
      this.mensaje = "Introduce un número menor.";
    }
  }

}
