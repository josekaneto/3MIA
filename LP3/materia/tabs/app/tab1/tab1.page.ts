import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFIlme } from '../Models/IFilmes';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public Router:Router,
    public alertController:AlertController,
    public toastController:ToastController
  ) {}

  listaFilmes: IFIlme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao:'1h50min',
      classificacao: 9,
      cartaz: 'https://cdn1.epicgames.com/offer/fda0f2b4047f46ffb4e94d5595c1468e/EGS_MortalKombat1_NetherRealmStudios_S4_1200x1600-076e67292bb57f11ebb4465b7e74a65e',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito:false
    },
    {
      nome: 'Vingadores Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao:'3h01min',
      classificacao: 6,
      cartaz: 'https://m.media-amazon.com/images/I/91J7VHbAwBL._AC_UF894,1000_QL80_.jpg',
      generos: ['Aventura', 'Ficção Científica', 'Ação'],
      pagina: '/avengers',
      favorito:false
    }
  ];

  exibirFilme(filme: IFIlme){
    const NavigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.Router.navigate(['filme-detalhe'], NavigationExtras)
  }

  async exibirAlertaFavorito(filme: IFIlme){
    const alert = await this.alertController.create({
      header:"Meus favoritos",
      message:"Deseja realmente favoritar o filme ?",
      buttons: [
        {
          text:"Cancelar",
          role:"cancel",
          handler: () => {
            filme.favorito = false
          }
        },
        {
          text: "Sim, favoritar.",
          handler: () => {
            filme.favorito=true
            this.apresentarToast()
          }
        }
      ]
    })
    await alert.present()
  }

  async apresentarToast(){
    const toast = await this.toastController.create({
      message:"Filme adicionado aos favoritos...",
      duration: 2000,
      color: "success"
    });
    toast.present()
  }
}
