import {Component} from 'angular2/core';
import {BacklogListComponent} from '../backlog-list/backlog-list.component';

@Component({
    selector: 'my-app',
    template: 
    `
        <h1>{{title}}</h1>
        <backlog-list>Loading Backlog List</backlog-list>
    `,
    directives: [BacklogListComponent]
})
export class AppComponent { 
    title = "RRI Portal";    
}
