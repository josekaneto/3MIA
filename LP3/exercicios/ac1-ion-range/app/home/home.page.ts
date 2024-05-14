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
    valor = 0
    mensal = 0
    valorTotal = 0

  calcularEmprestimo(){
    this.valor = this.valorEmprestimo * (this.jurosMensal/100) * this.meses
    this.mensal = this.valor / this.meses
    this.valorTotal = (this.jurosMensal * this.meses) + this.valorEmprestimo
  }

}
