import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SideNavComponent } from './app-core/common/side-nav/side-nav.component';
import { TopNavComponent } from "./app-core/common/top-nav/top-nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, FormsModule, LoginComponent, SideNavComponent, TopNavComponent]
})
export class AppComponent implements OnChanges, OnInit  {

  title = 'inmest-web';
  name = "Lucky";
  profile = {
    id: 1,
    first_name: "Lucky",
    last_name: "Dogbey"
  }
  genesis = "hello";

  ngOnInit(): void {
    console.log('On Init');
  }
  constructor() {
    console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes');
    for(const inputChange in changes) {
      console.log(changes[inputChange].firstChange, inputChange);
    }
  }

  
}