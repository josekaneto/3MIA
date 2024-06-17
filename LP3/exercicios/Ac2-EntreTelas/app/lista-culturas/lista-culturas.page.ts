import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-culturas',
  templateUrl: './lista-culturas.page.html',
  styleUrls: ['./lista-culturas.page.scss'],
})
export class ListaCulturasPage implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute) { }

  frutas:any;

  ngOnInit() {
    this.frutas = this.ActivatedRoute.snapshot.paramMap.get('frutas')
  }

}
