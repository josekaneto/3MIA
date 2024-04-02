import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public alertcontroller:AlertController
  ) {}

  km=''
  radioselecionada=''
  res=0
  app=0
  motorista=0

  mostrar(){
    if(this.radioselecionada== "Normal"){
       this.res = parseFloat(this.km) * 2.5 + 5
    }
    else if(this.radioselecionada == "Superior"){
      this.res = parseFloat(this.km) * 3.5 + 7.5
    }
    else if(this.radioselecionada == "VIP"){
      this.res = parseFloat(this.km) * 5.5 + 10
    }

    if(this.res < 150){
      this.app = this.res * 0.25
      this.motorista = this.res * 0.75
    }
    else{
      this.app = this.res * 0.20
      this.motorista = this.res * 0.80
    }
    this.exibirAlerta()
  }

  async exibirAlerta(){
    const alert = await this.alertcontroller.create({
      header: 'Espero que tenha tido uma ótima viagem',
      message: `O preço da sua viagem é: R$${this.res}, o preço do motorista é: R$${this.motorista} e o preço da viagem é: R$${this.app}`,
      buttons:['OK']
    })
    await alert.present()
  }
}
