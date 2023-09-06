import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  DisplayEvent:Event = {} as Event;
  // @Input() DisplayEvent:Event={} as Event;

  constructor(private _singleEventService:EventService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
  const routeParams = this._route.snapshot.paramMap;
  let id: number = Number(routeParams.get("id"));
  
  this._singleEventService.GetEventId(id).subscribe((response:Event) =>{
    console.log(response);
this.DisplayEvent = response;
  })
  }

}
