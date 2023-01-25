import { Component } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  submit(){
    var roomname = (<HTMLInputElement>document.getElementById('roomName')).value;

    var x = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    // document.getElementsByTagName('p')[0].innerHTML = "";
    // document.getElementsByTagName('p')[1].innerHTML = "Room-Name:  "+ roomname;
    document.getElementsByTagName('p')[2].innerHTML = "Room-Nr:  " + x;

    // var element =  <HTMLInputElement>document.getElementById('s1');
    // var parent = <HTMLInputElement>element.parentNode;
    //     parent.removeChild(element);
    
    // var element =  <HTMLInputElement>document.getElementById('input');
    // var parent = <HTMLInputElement>element.parentNode;
    //     parent.removeChild(element);

    // document.location.href = "/room";   
   

   }

   startmatching(){
    document.location.href = "/natchingresults"; 
   }
}
