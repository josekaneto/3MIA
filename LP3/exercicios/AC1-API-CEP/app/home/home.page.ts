import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cep: string = '';
  logradouro: string = '';
  bairro:string = '';
  localidade: string = '';
  uf: string = '';
  ddd: string = ''
  lista:any;


  cep2: string = '';
  uf2: string = '';
  bairro2: string = '';
  logradouro2: string = '';
  localidade2: string = '';
  ddd2: string = ''

  constructor(private http: HttpClient) {}

  buscarCep() {
    const url = `https://viacep.com.br/ws/${this.cep}/json/`;
    if(this.cep !== ''){
      this.http.get(url).subscribe(
        (data: any) => {
        this.logradouro = data.logradouro;
        this.bairro = data.bairro
        this.localidade = data.localidade
        this.uf = data.uf
        this.ddd = data.ddd
      },
      (erro) => {
        console.error('Erro ao consultar CEP:', erro);
        alert('Erro ao consultar CEP. Verifique se o CEP está correto.');
      }
      )
    }
    else{
      alert('Por favor, insira um CEP válido.');
    }
  }


  buscarCep2() {
    const url2 = `https://viacep.com.br/ws/${this.uf2}/${this.localidade2}/${this.logradouro2}/json/`;
    if(this.uf2 !== '' && this.localidade2 !== '' && this.logradouro2 !== ''){
    this.http.get(url2).subscribe((data: any) => {
      this.lista = data
    },
    (erro) => {
      console.error('Erro ao procurar pelo endereço:', erro);
      alert('Erro ao procurar pelo endereço. Verifique os dados fornecidos.');
    });
  }
  else{
    alert('Por favor, insira os dados solicitados.');
  }
  }
}
