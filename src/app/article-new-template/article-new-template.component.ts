import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article-item/article-item.component';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent implements OnInit {
 
  public message="";
  cosntructor () {}

  createArticle(articleForm) {
    if (articleForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const article: Article = articleForm.value.article;
      console.log("Creating article");
    }
  }
  ngOnInit(): void {
  }
}
