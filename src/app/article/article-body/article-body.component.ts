import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-body.component.html',
  styleUrl: './article-body.component.css'
})
export class ArticleBodyComponent {
  @Input()
  item: any;

}
