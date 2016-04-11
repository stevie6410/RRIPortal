import { Component } from 'angular2/core';

@Component({
    selector: 'backlog-list',
    template: '<h3>{{backlogCount}}</h3>'
})
export class BacklogListComponent {
    
    backlogCount = "There are 10 orders in the backlog";
    
    constructor() { }
}