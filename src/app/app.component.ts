import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home | Ian Steneker';
  year = 1984
  
  public constructor(private titleService: Title) {

  }
  
  ngOnInit(){
    this.setCurrentYear()
    this.titleService.setTitle(this.title)
  }

  setCurrentYear(){
    this.year = new Date().getFullYear()
  }
}
