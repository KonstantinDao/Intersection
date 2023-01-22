import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  createRoom(){
    document.location.href = "/createRoom";
  }
  joinRoom(){
    document.location.href = "/joinRoom";
  }
  matchingHistory(){
    document.location.href = "/matchingHistory";
  }
}
