import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceID,
    accessToken: environment.contentful.token
  })

  constructor() { }

  // Utility function for grouping articles by year after they've been fetched by getArticleByYear
  private groupByYear(arrayToGroup: Entry<any>[]) {
    let result = new Map()
    arrayToGroup.forEach(entry => {
      let fullYear: number = new Date(entry.fields.publishedDate).getFullYear()
      if(result.has(fullYear)) {
        result.get(fullYear).push({title: entry.fields.title, id: entry.sys.id})
      } else {
        result.set(fullYear, [{title: entry.fields.title, id: entry.sys.id}])
      }
    })
    return result;
  }

  // Request via created contentful client to gather articles
  // Includes optional query to only gather certain articles
  getArticles(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'article'
    }, query))
      .then(result => result.items);
  }

  //TODO: query the number of articles rather than the articles themselves and then counting them
  getNumberOfArticles(): Promise<number> {
    return this.client.getEntries(Object.assign({
      content_type: 'article'
    }))
      .then(result => result.items.length);
  }

  // Request to retrieve a specific article
  getArticle(articleID: string): Promise<Entry<any>> {
    return this.client.getEntry(articleID);
  }

  // Request via created contentful client to retrieve the latest article
  getLatestArticle(): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'article',
      order: '-sys.createdAt',
      limit: 1
    }))
      .then(result => result.items[0]);
  }
  

  // Request to retrieve all of the articles published dates and titles
  // These are then formatted into a map
  getArticlesByYear(query?: object): Promise<Map<number, string[]>> {
    return this.client.getEntries(Object.assign({
      content_type: 'article',
      select: 'sys.id,fields.title,fields.publishedDate',
      order: '-sys.createdAt'
    }, query))
      .then(result => this.groupByYear(result.items));

  }


}
