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
  item: any;//如果只有"item: any;" 代表是只能在 ArticleHeaderComponent 使用，如果要在外部(article-list.component.html )使用，需要加上@Input()
}
