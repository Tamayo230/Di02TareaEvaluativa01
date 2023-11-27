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
    
    //el segundo caso seria cuando el numero introducido es un numero negativo o mayor que 100
    if (this.numAle == this.numUsu) {
      this.mensaje = "Has acertado";   
    }  else if (this.numUsu < 0 || this.numUsu > 100) {
      this.mensaje = "Introduce un número entre 0 y 100";
    } else if (this.numAle < this.numUsu) {
      this.mensaje = "Introduce un número menor";
    } else if (this.numAle > this.numUsu) {  
      this.mensaje = "Introduce un número mayor";
    }
    
  }

}
