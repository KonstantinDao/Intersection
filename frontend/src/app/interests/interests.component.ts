// import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {FormControl} from '@angular/forms';

// @Component({
//   selector: 'app-interests',
//   templateUrl: './interests.component.html',
//   styleUrls: ['./interests.component.css']
// })
// export class InterestsComponent {
// toppingsControl = new FormControl<any[]>([]);
//   toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

//   onToppingRemoved(topping: string) {
//     const toppings = this.toppingsControl.value as string[];
//     this.removeFirst(toppings, topping);
//     this.toppingsControl.setValue(toppings); // To trigger change detection
//   }

//   private removeFirst<T>(array: T[], toRemove: T): void {
//     const index = array.indexOf(toRemove);
//     if (index !== -1) {
//       array.splice(index, 1);
//     }
//   }
// }

import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})

export class InterestsComponent {
  toppingsControl = new FormControl<any[]>([]);
  toppingList: string[] = ['Football', 'Volleyball', 'Walking', 'Politics', 'Badminton', 'Poetry', 'Shopping', 'Sport', 'Photography', 'Gym', 'Yoga', 'Movies', 'Art', 'Coffee', 'K-Pop', 'Tea', 'Material Arts', 'Marvel', 'Big-Band', 'Hiking', 'Bar-Hopping', 'Books', 'Among Us', 'Coocking', 'Stocks & ETFs', 'Fridays for future', 'Social media','Festivals',
  'Cars','Music', 'Outdoor',];


  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  sendDoc(interests: any){
    // let interests =  {toppingsControl.value} ;
    console.log(interests);
  }

  // isOptionDisabled(opt: any): boolean {
  //   return this.toppingsControl.value.length >= 3 && !this.toppingsControl.value.find(el => el == opt)
  // }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}


