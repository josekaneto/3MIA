import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-descriptografia',
  templateUrl: './descriptografia.page.html',
  styleUrls: ['./descriptografia.page.scss'],
})
export class DescriptografiaPage implements OnInit {

  constructor(private activedRoute:ActivatedRoute) { }

  nomeCriptografado:any
  emailCiptografado:any
  notaCriptografado:any

  nomeD =''
  emailD =''
  notaD = ''
  chaveSecreta=''


  ngOnInit() {
    this.nomeCriptografado = this.activedRoute.snapshot.paramMap.get("nomeCriptografado")
    this.emailCiptografado = this.activedRoute.snapshot.paramMap.get("emailCriptografado")
    this.notaCriptografado = this.activedRoute.snapshot.paramMap.get("notaCriptografado")
  }

  Descriptografar(){
    if(this.nomeCriptografado && this.emailCiptografado && this.notaCriptografado && this.chaveSecreta){
      const nome =  CryptoJS.AES.decrypt(this.nomeCriptografado,this.chaveSecreta)
      const email =  CryptoJS.AES.decrypt(this.emailCiptografado,this.chaveSecreta)
      const nota =  CryptoJS.AES.decrypt(this.notaCriptografado,this.chaveSecreta)
      const nomeDescriptografado = nome.toString(CryptoJS.enc.Utf8)
      const emailDescriptografado = email.toString(CryptoJS.enc.Utf8)
      const notaDescriptografada = nota.toString(CryptoJS.enc.Utf8)
      this.nomeD =  nomeDescriptografado
      this.emailD = emailDescriptografado
      this.notaD = notaDescriptografada
    }
  }

}
