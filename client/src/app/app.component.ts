import {Component, OnInit,AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
import { ChatService } from './chat.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

    constructor( private router: Router, private chatservice:ChatService) {

  }

  ngAfterViewInit(){
      console.log(this.chatservice.getListOfRooms())
}
}
