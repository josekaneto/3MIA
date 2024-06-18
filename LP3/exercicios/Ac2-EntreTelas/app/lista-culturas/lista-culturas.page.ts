import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-culturas',
  templateUrl: './lista-culturas.page.html',
  styleUrls: ['./lista-culturas.page.scss'],
})
export class ListaCulturasPage implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute) { }

  nota:any;
  frutas:any;

  ngOnInit() {
    this.nota = this.ActivatedRoute.snapshot.paramMap.get('nota')
    this.frutas = this.ActivatedRoute.snapshot.paramMap.get('frutas')
  }

}
