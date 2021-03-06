import { Component, Input, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Entry } from 'contentful'

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

@Component({
  selector: 'app-article-render',
  templateUrl: './article-render.component.html',
  styleUrls: ['./article-render.component.css']
})
export class ArticleRenderComponent implements OnInit {
  @Input() displayArticle: Entry<any>;
  formattedDate: string = "";
  constructor() { 

  }

  ngOnInit(): void {
    this.formattedDate = new Date(this.displayArticle.fields.publishedDate).toLocaleDateString("en-US", dateOptions)
  }

  renderContent(){
    return documentToHtmlString(this.displayArticle.fields.content)
  }

}
