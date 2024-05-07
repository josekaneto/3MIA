import { Component } from '@angular/core';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor() {}
lado1='';
lado2='';
lado3='';
Mensagem = ""


calcularTri(){
    if(parseFloat(this.lado1)==parseFloat(this.lado2) && parseFloat(this.lado2) == parseFloat(this.lado3) && parseFloat(this.lado1) == parseFloat(this.lado3)){
      this.Mensagem = "Isso é um Triângulo Equilátero"
    }
    else if (parseFloat(this.lado1)==parseFloat(this.lado2) || parseFloat(this.lado2) == parseFloat(this.lado3) || parseFloat(this.lado1) == parseFloat(this.lado3)){
      this.Mensagem = "Isso é um Triângulo Isóceles"
    }
    else if(parseFloat(this.lado1) + parseFloat(this.lado2) < parseFloat(this.lado3) || parseFloat(this.lado2) + parseFloat(this.lado3) < parseFloat(this.lado1) || parseFloat(this.lado1) + parseFloat(this.lado3) < parseFloat(this.lado2)) {
      this.Mensagem = "Não é um triângulo"
    }
    else if(parseFloat(this.lado1) != parseFloat(this.lado2) && parseFloat(this.lado2) != parseFloat(this.lado3) && parseFloat(this.lado1) != parseFloat(this.lado3)) {
      this.Mensagem = "Isso é um Triângulo Escaleno"
    }
  }
}
