import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'contentful';

import { ContentfulService } from '../services/contentful.service';

import { articleInfo } from '../interfaces/articleInfo'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  id: string = "";
  numberOfArticles: number = 0;
  articleLoaded: boolean = false;
  displayedArticle: Entry<any>[] = [];
  sidebarList: Map<number, articleInfo[]> = new Map();

  constructor(private contentfulService: ContentfulService, private router: Router,
              private route: ActivatedRoute, private titleService: Title) { 
  }

  ngOnInit(): void {
    this.titleService.setTitle("Blog | Ian Steneker")
    
    this.route.params.subscribe(
      params => {
        this.id = params['id']
        if(this.id?.match(/([a-z]|[A-Z]|\d){21}/g) == null) {
          this.redirectToLatestArticle();
        } else {
          this.contentfulService.getArticle(this.id)
          .then((result) => {
            this.updateArticle(result)
            this.articleLoaded = true
          })
          .catch((error) => {
            // If the user gave a format-correct URL but there's no article on that ID, redirect to a different page
            // TODO: add a 404 page
            this.router.navigate(['**'])
          })
          this.contentfulService.getArticlesByYear().then((resultMap) => {
            this.sidebarList = resultMap;
          })
        }
      }
    )

  }

  private redirectToLatestArticle(){
    // Get the latest article and reroute to it
    this.contentfulService.getLatestArticle().then(entryArticle => {
      this.router.navigateByUrl(`/`, {skipLocationChange: true}).then(()=>
      this.router.navigate([`/blog/${entryArticle.sys.id}`]));
    })
  }

  updateArticle(article: Entry<any>){
    this.displayedArticle[0] = article;
  }
}
