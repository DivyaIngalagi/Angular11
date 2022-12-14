import { Injectable } from '@angular/core';
import { ARTICLES } from './Article-data';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ArticleService {

  constructor() { }

  getArticles ()     
  {    
    return ARTICLES;    
  } 
}
