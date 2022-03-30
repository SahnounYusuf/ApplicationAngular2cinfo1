import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public titleApp: string;
  public  name: string;
  public listProduct: Product[];

  constructor() {
  }
  ngOnInit(): void {
    this.titleApp= 'First Angular App';
    this.listProduct = [
      {
        id: 1,
        title: 'T-shirt 1',
        price: 250,
        description: 'made with love',
        quantity: 219,
        picture: 'https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png',
        like: 189
      },

      {
        id: 2,
        title: 'T-shirt 2',
        price: 200,
        description: 'made with love',
        quantity: 0,
        picture: 'https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9086.png',
        like: 136
      },
      {
        id: 3,
        title: 'T-shirt 3',
        price: 145,
        description: 'made with love',
        quantity: 756,
        picture: 'https://i5.walmartimages.com/asr/f451ab76-9e31-4436-9578-422e1dfb744c_1.16c7b00bb3fb3c24d1e967276b26d538.jpeg',
        like: 10
      }
    ]
  }


}
