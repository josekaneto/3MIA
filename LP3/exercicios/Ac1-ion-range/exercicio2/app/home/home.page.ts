import { Component } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public alertController:AlertController
  ) {}

    valorEmprestimo = 0
    jurosMensal = 0
    meses = 0
    valor = ''
    mensal = ''
    valorTotal = ''

  calcularEmprestimo(){
    this.valor = (this.valorEmprestimo * (this.jurosMensal/100) * this.meses).toFixed(2)
    this.valorTotal = ((this.jurosMensal * this.meses) + this.valorEmprestimo).toFixed(2)
    this.mensal = (parseFloat(this.valorTotal)/this.meses).toFixed(2)
  }

}
