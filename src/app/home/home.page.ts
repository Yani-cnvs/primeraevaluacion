import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonSelect, IonSelectOption, IonText, CirculoComponent, TrianguloComponent],
})
export class HomePage {
  figuraSeleccionada: string | null = null;

  constructor() {}

  onFiguraSeleccionada(event: any) {
    this.figuraSeleccionada = event.detail.value;
    console.log('Figura seleccionada:', this.figuraSeleccionada);
  }
}
