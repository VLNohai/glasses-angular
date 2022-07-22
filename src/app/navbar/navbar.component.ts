import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {observable, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> = new Observable<string[]>();

  ngOnInit() {
    this.options = [];
    this.productService.getAllProducts().forEach(product=>{
      this.options.push(product.title);
    return '';
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  constructor(private productService : ProductService, private router : Router){

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue)).slice(0, 4);
  }

  accessItem(option : string){
    this.router.navigateByUrl('products/' + option);
  }

}
