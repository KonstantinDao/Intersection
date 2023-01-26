import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent {
  public id: string = '';
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
     const id = this.route.snapshot.paramMap.get('id');
     if(id === null){
      this.id = '';
     } else{
      this.id = id;
     }
  }
  joinroom(){
    document.location.href = `/interests/${this.id}`;
  }
}
