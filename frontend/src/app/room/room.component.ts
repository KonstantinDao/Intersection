import { Component } from '@angular/core';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  
  submit(){
  var x = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  document.getElementsByTagName('p')[0].innerHTML = "";
  // document.getElementsByTagName('p')[1].innerHTML = "Room-Name:  "+ roomname;
  document.getElementsByTagName('p')[2].innerHTML = "Room-Nr:  " + x;
  }

}
