import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  produto=''
  porcentagem=0
  precoDesconto=''
  precoTotal=0

  calcularPorcentagem(){
    this.precoDesconto = (parseFloat(this.produto) * (this.porcentagem/100)).toFixed(2)
    this.precoTotal = parseFloat(this.produto) - parseFloat(this.precoDesconto)
    return this.precoTotal.toFixed(2)
  }

}
