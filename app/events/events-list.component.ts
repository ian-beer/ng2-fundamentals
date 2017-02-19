import { Component, OnInit } from '@angular/core';
import { events as Events } from "./data"

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events = Events;
    
    constructor() { }

    ngOnInit() { }
}