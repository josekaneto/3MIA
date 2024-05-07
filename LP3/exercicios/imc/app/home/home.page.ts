import { Component, numberAttribute } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioselecionada:string=''


  constructor(
    public toastcontroller:ToastController,
    public alertController:AlertController
  ) {}

  altura=''
  peso = 0


    calcular(){
      if(this.radioselecionada == 'Masculino' ){
        this.peso= 72.7*parseFloat(this.altura)-58
      }
      else if(this.radioselecionada == 'Feminino'){
        this.peso= 62.1*parseFloat(this.altura)-44.7
      }
      this.exibirPeso()
    }

    async exibirPeso(){
      const peso = await this.alertController.create({
        header: `Seu peso ideal é: ` ,
        message: this.peso.toFixed(2),
        buttons: ['OK']
      })
      peso.present()
    }

}
