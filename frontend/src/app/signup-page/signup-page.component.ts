import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  fehler(){
    document.getElementsByTagName('p')[0].innerHTML = "Something didn't work. Please try again.";
  }
}
