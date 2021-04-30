import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer">
    <div class="sitemap">
    <ul class ="sitemap">
      <li><a routerLink='/'>Home</a>
      <li><a routerLink='/blog'>Blog</a>
    </ul>
    </div>

    <p class="footer">Made by Ian Steneker, © {{year}}</p>
  </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = 1984
  constructor() { }

  ngOnInit(): void {
    this.setCurrentYear()
  }

  setCurrentYear(){
    this.year = new Date().getFullYear()
  }

}
