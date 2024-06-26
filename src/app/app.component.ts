import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Page1Component } from "./page1/page1.component";
import { HeaderComponent } from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { CommonModule } from '@angular/common'; // ngFor要用到
import { ArticleModule } from './article/article.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Page1Component, FormsModule, HeaderComponent, FooterComponent,CommonModule,ArticleModule]
})
export class AppComponent {
  title = 'wally';
  url='http://blog.miniasp.com/';
  imageurl='/assets/images/logo.png';
  keyword = '';
  constructor() {
  }

  changeTitle($altKey: boolean) {
    if ($altKey) {
      this.title = 'change title test';
    }
  }
  keywordReset() {
    this.keyword = '';
  }
}
