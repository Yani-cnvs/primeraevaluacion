import { Component } from '@angular/core';
import { IonItem, IonInput, IonList, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonButton, FormsModule, IonList, IonItem, IonInput],
})
export class CirculoComponent  {

radio?: number;
CalcularCir?: number;
  Resultado: string="";

  constructor() { }
CalcularCirculo() {
  if(this.radio) {
    const perimetro = this.radio * 2 * Math.PI;
    this.Resultado = `El perímetro del círculo es: ${perimetro.toFixed(0)}`;
  } else {
  this.Resultado="Por favor, ingrese un valor válido para el radio.";
}
}
}
