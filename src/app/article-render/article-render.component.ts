import { Component, Input, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Entry } from 'contentful'

@Component({
  selector: 'app-article-render',
  templateUrl: './article-render.component.html',
  styleUrls: ['./article-render.component.css']
})
export class ArticleRenderComponent implements OnInit {
  @Input() displayArticle: Entry<any>;
  constructor() { 

  }

  ngOnInit(): void {
  }

  renderContent(){
    return documentToHtmlString(this.displayArticle.fields.content)
  }

}
