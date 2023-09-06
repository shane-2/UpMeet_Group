import { Component, Input, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/events.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  name:string = "shane"
@Input() DisplayFavorite:Event = {} as Event;
FavoriteListResult:Favorite[] = [];
EventListResult:Event[] = [];

  constructor(private _favoriteService:EventService) { }

   ngOnInit(): void {
    this.DisplayFavorites(this.name);
    this.DisplayEvents();
    }

   DisplayFavorites(name:string):void{
     
     this._favoriteService.GetFavorites(name).subscribe((response:Favorite[]) =>{
       console.log(response);
      this.FavoriteListResult = response;
     });

   }

   DisplayEvents(): void {
    this._favoriteService.GetEvents().subscribe((response:Event[]) => {
      console.log(response);
      this.EventListResult = response;
    });
  }
}
