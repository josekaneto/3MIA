import { Component } from '@angular/core';
import { AlertController, RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public alertController:AlertController
  ) {}
  valorRange=0
  valorConta=''
  res=0
  contaMaisGorjeta=0

  contaGorjeta() {
    this.res=parseFloat(this.valorConta) * this.valorRange/100
    this.contaMaisGorjeta= this.res + parseFloat(this.valorConta)
    this.exibirConta()
  }

  async exibirConta(){
    const nota = await this.alertController.create({
      header: 'Aqui esta a sua conta mais a sua gorjeta',
      message: `A sua conta total é de R$${this.contaMaisGorjeta} e sua gorjeta é R$${this.valorRange}`,
      buttons: ['Ok'] 
    })
    nota.present()
  }

  onIonChange(ev:RangeCustomEvent){
    this.valorRange = parseInt(ev.detail.value.toString())
  }

}
