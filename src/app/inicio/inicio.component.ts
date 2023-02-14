import { Component, OnInit } from '@angular/core';

import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inicio',
  imports: [NgbCarouselModule, NgIf, MatCardModule, MatButtonModule],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public produtos: Produto[] = [];
  constructor(private _produtoService: ProdutoService) { }
  ngOnInit(): void {
    this.listarProdutos();
  }
  listarProdutos(): void {
    this._produtoService.getProdutos()
      .subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.produto,
                item.descricao,
                item.foto,
                item.preco
              );
            }
          )
        }
      )
  }
}
