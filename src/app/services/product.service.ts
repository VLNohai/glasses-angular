import { Injectable } from "@angular/core";
import { Product } from "../product/product.component";
@Injectable({providedIn : "root"})

export class ProductService{
    products : Product[] = [{
            id : 0,
            title : "test",
            description : "descriere",
            price : 15
    },
    {
        id : 1,
        title : "test2",
        description : "descriere2",
        price : 20
    },
    {
        id : 2,
        title : "test3",
        description : "descriere3",
        price : 10
    },
    {
        id : 3,
        title : "test4",
        description : "descriere4",
        price : 25
    },
    {
        id : 4,
        title : "test5",
        description : "descriere5",
        price : 7
    }
]
    getProducts(){
        return this.products;
    }
}