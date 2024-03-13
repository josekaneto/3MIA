import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  nota1 = '';
  nota2 = '';
  nota3 = '';
  nota4 = '';
  res = 0;
  Mensagem = '';

  calcularMedia() {
    this.res =
      (parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3) + parseFloat(this.nota4)) /4;
    if (this.res < 3) {
      this.Mensagem = 'Retido, com media ' +this.res;
    } else if (this.res >= 3 && this.res <= 5.9) {
      this.Mensagem = 'Recuperação, com media ' +this.res;
    } else {
      this.Mensagem = 'Aprovado, com media ' +this.res;
    }
  }
}
