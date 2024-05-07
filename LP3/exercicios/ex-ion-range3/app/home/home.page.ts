import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  altura = 0;
  peso = 0;
  imc = 0;
  saida = '';
  constructor() {}
  calcularIMC() {
    const alturaMetros = this.altura / 100;
    const imc = this.peso / (alturaMetros * alturaMetros);
    if (imc < 18.5) {
      this.saida = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      this.saida = 'Peso normal';
    } else if (imc >= 24.9 && imc < 29.9) {
      this.saida = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      this.saida = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
      this.saida = 'Obesidade Grau II';
    } else {
      this.saida = 'Obesidade Grau III';
    }
  }
}
