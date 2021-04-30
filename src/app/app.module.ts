import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPictureComponent } from './header-picture/header-picture.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { ArticleRenderComponent } from './article-render/article-render.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPictureComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent,
    BlogSidebarComponent,
    ArticleRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
