import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //ngStyle所以要引入CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'wally';
  url = 'http://blog.miniasp.com/';
  imageurl = '/assets/images/logo.png';
  counter = 0;//計數器

  changeTitle($altKey: boolean) {
    if ($altKey) {
      this.title = 'change title test';
    }
    this.counter++;
  }
  //  屬性型指令
  getStyle() {
    return {
      'font-size': (12+this.counter) +'px'
    };
  }
}
