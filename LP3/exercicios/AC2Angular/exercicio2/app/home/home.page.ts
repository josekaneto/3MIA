import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public toastcontroller:ToastController
  ) {}

  km=''
  preco=''
  radioselecionada=''
  litro=0
  res=0

  Calcular(){
    if(this.radioselecionada == "Etanol"){
      this.litro = (parseFloat(this.km) / 9)
      this.res = this.litro * parseFloat(this.preco)
    }
    else if(this.radioselecionada == "Gasolina"){
      this.litro = (parseFloat(this.km) / 12)
      this.res = this.litro * parseFloat(this.preco)
    }
    else if(this.radioselecionada == "Diesel"){
      this.litro = (parseFloat(this.km) / 15)
      this.res = this.litro * parseFloat(this.preco)
    }
    this.exibirToast()
  }

  async exibirToast(){
    const toast = await this.toastcontroller.create({
      message: `O preço a ser pago de combustível é de R$${this.res}, consumindo ${this.litro} litros de ${this.radioselecionada}`,
      duration: 2000
    })
    toast.present()
  }

}
