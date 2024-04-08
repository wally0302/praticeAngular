import { NgModule } from '@angular/core';
import { ArticleListComponent } from './article-list/article-list.component';


@NgModule({
  declarations: [],
  imports: [
    ArticleListComponent,
  ],
  exports: [
    ArticleListComponent //要有這個 app-article-list才能在app.component.ts裡面使用
  ]
})
export class ArticleModule { }
