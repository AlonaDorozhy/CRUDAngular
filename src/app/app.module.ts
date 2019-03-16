import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FoodComponent } from './food/food.component';
import { FoodItemComponent } from './food/food-item/food-item.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FormsModule } from "@angular/forms";
import { FoodItemService } from './shared/food-item.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodItemComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [FoodItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
