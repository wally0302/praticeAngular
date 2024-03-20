import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page1Component } from "./page1/page1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Page1Component]
})
export class AppComponent {
  title = 'wally';
  url='http://blog.miniasp.com/';
  constructor() {
    setTimeout(() => {
      this.title = 'Wally is good boy';
    }, 3000);
  }

}
