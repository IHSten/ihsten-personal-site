import { Component, Input, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types';
import { Entry } from 'contentful'

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const options = {
  renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (assetDescription:any) => {
        const fields = assetDescription.data.target.fields;
        return `<img height=100% width=100% src="${fields.file.url}" alt="${fields.description}"/>`;
      }  
    },
};

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
    return documentToHtmlString(this.displayArticle.fields.content, options)
  }

}
