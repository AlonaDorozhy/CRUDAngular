import { Component, OnInit } from '@angular/core';
import { FoodItemService } from 'src/app/shared/food-item.service';
import { FoodItem } from 'src/app/shared/food-item.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  list: FoodItem[];
  constructor( private service: FoodItemService) { }

  ngOnInit() {
    this.service.getFood().subscribe(actionArray =>{
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as FoodItem;
      });
   
    })
  }

}
