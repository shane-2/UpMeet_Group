import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  EventListResult:Event[] = [];

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

  DeleteOrder(id:number):void{
    //feedback for user
    let target:number = this.EventListResult.findIndex(o => o.id ==id);
    this.EventListResult.splice(target,1);

    this._eventService.DeleteEvent(id).subscribe((response:Event) => {
      console.log(response);
    });
  }

}
