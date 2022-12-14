import { Component, OnInit } from '@angular/core';
import { Article } from '../book/Article';
import { ArticleService } from '../book/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles:Article[];
  
  constructor(private articleService:ArticleService) { }

  getArticles()    
  {    
    this.articles=this.articleService.getArticles();    
  } 

  ngOnInit(): void {
    this.getArticles();  
  }

}
