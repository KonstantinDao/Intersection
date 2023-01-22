import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-eingabe',
  templateUrl: './signup-eingabe.component.html',
  styleUrls: ['./signup-eingabe.component.css']
})
export class SignupEingabeComponent {
  signup(){
    // this.router.navigate(["/menu"]);
    document.location.href = "/menu";
   }
   
}
