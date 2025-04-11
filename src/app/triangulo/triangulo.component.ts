import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Triangulo } from '../modelo/figuras';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonButton, FormsModule, IonList, IonItem, IonInput],
})
export class TrianguloComponent  implements OnInit {
ladoA?: number;
ladoB?: number;
ladoC?: number;
CalcularTrian!: string;
Resultado: string="";
 
constructor() { }

ngOnInit() {}

  CalcularTriangulo() {
    if (this.ladoA && this.ladoB && this.ladoC) {
      const figura = new Triangulo(this.ladoA, this.ladoB, this.ladoC);

      const perimetro = figura.calcularPerimetroTriangulo();

      this.Resultado = `El perímetro del triángulo es: ${perimetro}`;
  } else {
    this.Resultado = "Por favor, ingresa valores válidos para los tres lados.";
  }
}
} 

