import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  @Input() listByYear: Map<number, string[]> = new Map();
  baseURL: string = location.origin
  constructor() { }

  ngOnInit(): void {
  }

}
