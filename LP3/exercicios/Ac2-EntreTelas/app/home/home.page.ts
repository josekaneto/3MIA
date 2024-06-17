import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router) {}

  setembro=0;
  outubro=0;
  novembro=0;
  dezembro=0;
  media=0
  frutas: string[]=[]


  mostrarCulturas(){
    this.media = (this.setembro + this.outubro + this.novembro + this.dezembro)/4
    this.frutas.push("Maçã", "Laranja")
    this.router.navigateByUrl(`/lista-culturas/${this.frutas}`)
  }

}
