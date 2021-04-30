import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id')
  numberOfArticles: number = 0;
  articleLoaded: boolean = false;
  displayedArticle: Entry<any>[] = [];
  sidebarList: Map<number, string[]> = new Map();
  

  constructor(private contentfulService: ContentfulService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
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
        this.router.navigate(['/'])
      })
      this.contentfulService.getArticlesByYear().then((resultMap) => {
        this.sidebarList = resultMap;
      })
    }
  }

  private redirectToLatestArticle(){
    // Get the latest article and reroute to it
    this.contentfulService.getLatestArticle().then(entryArticle => {
      if(entryArticle.sys.id == null || entryArticle.sys.id == "null") {
        this.router.navigate(['/'])
      } else {
        this.router.navigate([`/blog/${entryArticle.sys.id}`])
      }

    })
  }

  updateArticle(article: Entry<any>){
    this.displayedArticle[0] = article;
  }
}
