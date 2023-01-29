import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/User'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})

export class InterestsComponent {
  toppingsControl = new FormControl<any[]>([]);
  toppingList: string[] = ['Football', 'Volleyball', 'Walking', 'Politics', 'Badminton', 'Poetry', 'Shopping', 'Sport', 'Photography', 'Gym', 'Yoga', 'Movies', 'Art', 'Coffee', 'K-Pop', 'Tea', 'Material Arts', 'Marvel', 'Big-Band', 'Hiking', 'Bar-Hopping', 'Books', 'Among Us', 'Coocking', 'Stocks & ETFs', 'Fridays for future', 'Social media','Festivals',
  'Cars','Music', 'Outdoor',];

  readonly ROOT_URL = 'http://localhost:8080/api'

  user: any
  public id: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
     const id = this.route.snapshot.paramMap.get('id');
     if(id === null){
      this.id = '';
     } else{
      this.id = id;
     }
  }

  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  updateInterests(interests: any){

    const data= {
      interests: interests,
    }

    this.http.patch(this.ROOT_URL + `/users/${this.id}`, data).subscribe(data => {
      console.log(data);
      this.user = data;
    })
    document.location.href = `/waitingRoom/${this.id}`;
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}


