import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

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

  createRoom(){
    document.location.href = `/createRoom`;
  }
  joinRoom(){
    document.location.href = `/joinRoom/${this.id}`;
  }
  matchingHistory(){
    document.location.href = `/matchingHistory/${this.id}`;
  }
}
