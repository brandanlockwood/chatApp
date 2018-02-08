import {Component, OnInit,AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    constructor( private router: Router) {

  }
   ngAfterViewInit() {
    this.router.navigateByUrl('login');
  }

}
