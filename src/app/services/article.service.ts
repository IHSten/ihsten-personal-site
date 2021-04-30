import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../interfaces/article'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  testArticle={
    articleTitle: "Test Article",
    articleText: `
    # IHSten's personal site

    This project is the frontend for my personal/portfolio site. It probably could be made with just HTML/CSS, but I chose to add Angular functionality since it's lightweight and allows for extremely easy future functionality, like adding a projects blog, which I plan to do in the near future. The angular functionalities I've left pretty barebones, so all the usual \`ng\` rules apply.
    `,
    publishedYear: "2021"
  }

  constructor() { }

  getNumberOfArticles(): Observable<number>{
    // HTTP query to get the number of articles stored in the article db
    return of(1)
  }

  getArticleById(articleId: number): Observable<Article>{
    // HTTP query with an articleId param to the server in front of the db
    return of(this.testArticle)
  }

  getArticleListByYear(): Observable<Article[][]> {
    // HTTP query to get article titles and year in an array, then group by year and pass to requestor
    return of([[this.testArticle],[this.testArticle]])
  }
}
