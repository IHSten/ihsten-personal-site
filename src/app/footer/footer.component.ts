import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

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

    <div class="footer-utility">
      <p class="footer">Made by Ian Steneker, © {{year}}</p>
      <span class="toggledarkmode">
        <button class="textbutton" (click)="onToggle()">Toggle Dark Mode</button>
      </span>

    </div>
  </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = 1984
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.setCurrentYear()
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

  setCurrentYear(){
    this.year = new Date().getFullYear()
  }

}
