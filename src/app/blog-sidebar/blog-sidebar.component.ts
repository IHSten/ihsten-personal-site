import { Component, OnInit, Input } from '@angular/core';
import { articleInfo } from '../interfaces/articleInfo'

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  @Input() listByYear: Map<number, articleInfo[]> = new Map();
  constructor() { }

  ngOnInit(): void {
  }

}
