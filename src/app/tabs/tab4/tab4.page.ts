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
  numUsu :number = 0;
  numIntentos: number = 0;
  mensaje: string = "";
  labelNumero: string = "Itroduzca un número"
  numero?: number;
  

  constructor() { }

  onClick(){
    console.log(this.numAle);
    console.log(this.numero);
   this.comprobarNumAle(); 
  
  }
  //función que se ejecuta unicamente una vez al inicio de la aplicacion
  ngOnInit() {
    this.generarNumAle();
    console.log("se ha generado un nuevo numero aleatorio");
  }
  generarNumAle(){
  // Math.floor(Math.random() * 100) + 1;
  this.numAle = Math.floor(Math.random() * 101);
   return  this.numAle;
    
  }
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.reiniciarJuego();
        this.generarNumAle();
        console.log("se ha generado un nuevo numero aleatorio");
      },
    },
  ];

  reiniciarJuego(){
    this.numero= undefined;
    this.numAle = 0;
    this.numUsu = 0;
    this.numIntentos = 0;
    this.mensaje = "";
    console.log(this.numero)
  }
  comprobarNumAle(){
    //en el caso de que en la vista aya algo escrito en el campo imput
    //asignara el valor y procedera a comparar
    if (this.numero != null){
      this.numUsu= this.numero;
      if (this.numAle == this.numUsu) {
        this.mensaje = "enhorabuena!! Has acertado el número secreto."; 
      
        //en el caso de que el valor introducido este fuera de los numeros 0-100
      } else if (this.numUsu < 0 || this.numUsu > 100) {
        this.mensaje = "Introduce un número entre 0 y 100";
        
      } else if (this.numAle < this.numUsu) {
        this.mensaje = "Introduce un número menor";
        this.numIntentos++;
       
      } else if (this.numAle > this.numUsu) {  
        this.mensaje = "Introduce un número mayor";
        this.numIntentos++;

      }
      //en el caso de que no aya nada escrito saldran un mensaje diciendo que no se ha introducido ningun número
    }else if (this.numero == undefined){
      this.mensaje = "El campo esta vacio, Introduce un numero";
      console.log("El campo esta vacio, Introduce un numero");
    }
  }

}
