import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {

  public id: string = '';
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

}
