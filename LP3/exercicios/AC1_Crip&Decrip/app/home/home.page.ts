import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string=''
  email: string=''
  nota: string= ''
  chaveSecreta: string=''

  constructor(public router: Router) {}

  Criptografar(){
    if(this.nome && this.email && this.nota && this.chaveSecreta){
      const nomeCriptografado =  CryptoJS.AES.encrypt(this.nome,this.chaveSecreta).toString()
      const emailCriptografado =  CryptoJS.AES.encrypt(this.email,this.chaveSecreta).toString()
      const notaCriptografado =  CryptoJS.AES.encrypt(this.nota,this.chaveSecreta).toString()
      this.router.navigateByUrl
      (`descriptografia/${nomeCriptografado}/${emailCriptografado}/${notaCriptografado}/${this.chaveSecreta}`)
    }
  }

}
