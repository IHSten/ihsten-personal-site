import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ihsten-personal-site';
  year = 1984
  ngOnInit(){
    this.getCurrentYear()
  }

  getCurrentYear(){
    this.year = new Date().getFullYear()
  }
}
