import { Injectable } from "@angular/core";
import { Product } from "../product/product.component";

const folder = 'assets/resources/'
const ext = '.jpg'

@Injectable({providedIn : "root"})

export class ProductService{
    products : Product[] = [{
            id : 0,
            title : "test",
            description : "descriere",
            price : 15,
            imagePath : folder + 'pair1' + ext
    },
    {
        id : 1,
        title : "test2",
        description : "descriere2",
        price : 20,
        imagePath : folder + 'pair2' + ext
    },
    {
        id : 2,
        title : "test3",
        description : "descriere3",
        price : 10,
        imagePath : folder + 'pair3' + ext
    },
    {
        id : 3,
        title : "test4",
        description : "descriere4",
        price : 25,
        imagePath : folder + 'pair4' + ext
    },
    {
        id : 4,
        title : "test5",
        description : "descriere5",
        price : 7,
        imagePath : folder + 'pair5' + ext

    },
    {
        id : 5,
        title : "test6",
        description : "descriere6",
        price : 12,
        imagePath : folder + 'pair6' + ext

    }
]
    getProducts(){
        return this.products;
    }
}