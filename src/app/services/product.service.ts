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
            imagePath : folder + 'pair1' + ext,
            category : 'glasses'
    },
    {
        id : 1,
        title : "test2",
        description : "descriere2",
        price : 20,
        imagePath : folder + 'pair2' + ext,
        category : 'glasses'
    },
    {
        id : 2,
        title : "test3",
        description : "descriere3",
        price : 10,
        imagePath : folder + 'pair3' + ext,
        category : 'glasses'
    },
    {
        id : 3,
        title : "test4",
        description : "descriere4",
        price : 25,
        imagePath : folder + 'pair4' + ext,
        category : 'glasses'
    },
    {
        id : 4,
        title : "test5",
        description : "descriere5",
        price : 7,
        imagePath : folder + 'pair5' + ext,
        category : 'glasses'

    },
    {
        id : 5,
        title : "test6",
        description : "descriere6",
        price : 12,
        imagePath : folder + 'pair6' + ext,
        category : 'glasses'

    },
    {
        id : 6,
        title : "test6",
        description : "descriere6",
        price : 12,
        imagePath : folder + 'pair6' + ext,
        category : 'glasses'

    },
    {
        id : 7,
        title : "test6",
        description : "descriere6",
        price : 12,
        imagePath : folder + 'pair6' + ext,
        category : 'glasses'

    },
    {
        id : 8,
        title : "test6",
        description : "descriere6",
        price : 12,
        imagePath : folder + 'pair6' + ext,
        category : 'glasses'
    },
    {
        id : 9,
        title : "test6",
        description : "descriere6",
        price : 12,
        imagePath : folder + 'pair6' + ext,
        category : 'glasses'
    },
    {
        id : 10,
        title : "test6",
        description : "descriere6",
        price : 12,
        imagePath : folder + 'pair6' + ext,
        category : 'glasses'
    },
    {
        id : 11,
        title : "test6",
        description : "descriere6",
        price : 12,
        imagePath : folder + 'pair6' + ext,
        category : 'glasses'
    },
    {
        id : 12,
        title : "toc1",
        description : "descriere7",
        price : 18,
        imagePath : folder + 'toc1' + ext,
        category : 'case'
    },
    {
        id : 13,
        title : "toc2",
        description : "descriere7",
        price : 18,
        imagePath : folder + 'toc2' + ext,
        category : 'case'
    },
    {
        id : 14,
        title : "toc3",
        description : "descriere7",
        price : 18,
        imagePath : folder + 'toc3' + ext,
        category : 'case'
    },
    {
        id : 15,
        title : "toc4",
        description : "descriere7",
        price : 19,
        imagePath : folder + 'toc4' + ext,
        category : 'case'
    }
]
    getProducts(){
        return this.products;
    }
}