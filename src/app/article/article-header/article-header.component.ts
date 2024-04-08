import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-header.component.html',
  styleUrl: './article-header.component.css'
})
export class ArticleHeaderComponent {
  @Input()
  item: any;

}
