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
  media=0;
  nota='';
  frutas='';


  mostrarCulturas(){
    this.media = (this.setembro + this.outubro + this.novembro + this.dezembro)/4

    if(this.media >= 10 && this.media <= 15){
      this.frutas = ["Kiwi", "Framboesa", "Cereja", "Amora", "Blueberry", "Groselha", "Cranberry", "Avelã"].toString()
      this.nota = `Se a media de temperatura dos meses for ${this.media.toFixed(0)}°C, dará para plantar essas frutas:`
    }
    else if(this.media >= 16 && this.media <= 21){
      this.frutas = ["Maçã","Caqui", "Uva","Pêssego", "Pera", "Maracujá", "Figo", "Amora"].toString()
      this.nota = `Se a media de temperatura dos meses for ${this.media.toFixed(0)}°C, dará para plantar essas frutas:`
    }
    else if(this.media >= 22 && this.media <= 30) {
      this.frutas = ["Banana", "Manga", "Abacaxi", "Melancia", "Coco", "Mamão", "Laranja", "Limão", "Jabuticaba"].toString()
      this.nota = `Se a media de temperatura dos meses for ${this.media.toFixed(0)}°C, dará para plantar essas frutas:`
    }
    else if(this.media > 31){
      this.nota = `Não existem frutas que possam ser plantadas com a temperatura media de: ${this.media.toFixed(0)}°C`
      this.frutas = '';
    }

    this.router.navigateByUrl(`/lista-culturas/${this.nota}/${this.frutas}`)
  }

}
