import { Component, numberAttribute } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioselecionada: string = '';

  valorEntrada = 0;
  unidadeEntrada = 'km';
  unidadeSaida = 'mi';
  valorSaida = '';
  constructor() {}
  converterUnidades() {
    if (this.unidadeEntrada === 'km' && this.unidadeSaida === 'mi') {
      this.valorSaida = (this.valorEntrada * 0.621371).toFixed(2);
    } else if (this.unidadeEntrada === 'm' && this.unidadeSaida === 'mi') {
      this.valorSaida = (this.valorEntrada * 0.000621371).toFixed(2);
    } else if (this.unidadeEntrada === 'km' && this.unidadeSaida === 'ft') {
      this.valorSaida = (this.valorEntrada * 3280.84).toFixed(2);
    } else if (this.unidadeEntrada === 'm' && this.unidadeSaida === 'ft') {
      this.valorSaida = (this.valorEntrada * 3.28084).toFixed(2);
    } else {
      this.valorSaida = 'Unidades de medida não suportadas.';
    }
  }
}
