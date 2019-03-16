import { Component, OnInit } from '@angular/core';
import { FoodItemService } from 'src/app/shared/food-item.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  constructor(private service: FoodItemService,
    private firestore: AngularFirestore,

    ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: '',
      product: '',
      mealtime: '',
      weight: '',
      calorie: '',
    }
  }
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('eating').add(data);
    else
      this.firestore.doc('eating/' + form.value.id).update(data);
    this.resetForm(form);
   
  }

}
