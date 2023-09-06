import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { Favorite } from 'src/app/models/favorite';
import { EventService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  e:Event = {} as Event;
  EventListResult:Event[] = [];
  FavoriteListResult:Favorite[] = [];
  name:string = "";
  constructor(private _eventService:EventService) { }

  ngOnInit(): void {
    this._eventService.GetEvents().subscribe((response:Event[]) => {
      console.log(response);
      this.EventListResult = response;
    });
  }

  NewEvent(newEvent:Event){
    this._eventService.AddEvent(newEvent).subscribe((response:Event) => {
      console.log(response);
      this.EventListResult.push(response);
    });
  }

  DeleteEvent(id:number):void{
    //feedback for user
    let target:number = this.EventListResult.findIndex(e => e.id ==id);
    this.EventListResult.splice(target,1);

    this._eventService.DeleteEvent(id).subscribe((response:Event) => {
      console.log(response);
    });
  }
  AddFavorites(name:string, newFavorite:Event):void{
    let favorite:Favorite = {} as Favorite;
    // this._eventService.AddFavorite();
    favorite.eventId = newFavorite.id;
    favorite.username = name;
    this._eventService.AddFavorite(favorite).subscribe((response:Favorite) =>{
      console.log(response)
      this.FavoriteListResult.push(response);
    });
  }

  // AddFavorites(name:string, newFavorite:Event):void{
  //   let favorite:Favorite = {} as Favorite;    
  //   // this._eventService.AddFavorite();
  //   favorite.eventId = newFavorite.id;
  //   favorite.username = name;
  //   this.FavoriteListResult.forEach((f:Favorite)=>{
  //     let x:number = 0;
  //     if(favorite.eventId == f.eventId)
  //     {
  //         x++;
        
  //     }
  //     if(x = 0)
  //     {
  //       this._eventService.AddFavorite(favorite).subscribe((response:Favorite) =>{
  //         console.log(response)
  //         this.FavoriteListResult.push(response);
  //       });
        
  //     }
  //   });     
    
    
    
  
  // }
}






