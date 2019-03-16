import { Injectable } from '@angular/core';
import { FoodItem } from './food-item.model';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
  formData: FoodItem;
  constructor() { }
}
