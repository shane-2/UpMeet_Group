import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetEvents():Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseUrl}api/event`)
  }

  AddEvent(newEvent:Event):Observable<Event>{
    return this.http.post<Event>(`${this.baseUrl}api/event`, newEvent);
  }

  DeleteEvent(id:number):Observable<Event>{
    return this.http.delete<Event>(`${this.baseUrl}api/event/${id}`);
  }
  

  GetFavorites(name:string):Observable<Favorite[]>{
    return this.http.get<Favorite[]>(`${this.baseUrl}api/favorite/${name}`)
  }

  AddFavorite(newFavorite:Favorite):Observable<Favorite>{
    return this.http.post<Favorite>(`${this.baseUrl}api/favorite`, newFavorite);
  }

  DeleteFavorite(id:number):Observable<Favorite>{
    return this.http.delete<Favorite>(`${this.baseUrl}api/favorite/${id}`);
  }
}
