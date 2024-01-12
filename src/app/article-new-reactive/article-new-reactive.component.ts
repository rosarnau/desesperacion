import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Article } from '../article/article-item/article-item.component';
import { ArticleService } from '../article.service';
import { MessageService } from '../services/message.service';

// Definir la función del validador personalizado aquí
function NameArticleValidator(control: AbstractControl): ValidationErrors | null {
  const forbiddenNames = ['Prueba', 'test', 'mock', 'fake']; // Agrega los nombres prohibidos según tus necesidades

  // Verificar si el valor del control está en la lista de nombres prohibidos
  if (control.value && forbiddenNames.includes(control.value.toLowerCase())) {
    return { forbiddenName: true }; // Devuelve un objeto con la propiedad forbiddenName
  }

  return null; // La validación es exitosa
}

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css'],
  providers:[MessageService]
})
export class ArticleNewReactiveComponent implements OnInit {
  articleForm: FormGroup;
  submitted = false;
  public message = "";

  constructor(private fb: FormBuilder, private articleService: ArticleService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      nombre: ['', [Validators.required, NameArticleValidator]],
      precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.min(0.1)]],
      imagenUrl: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?\S+$/)]],
      enVenta: [false]
    });
  }

  get formControls() {
    return this.articleForm.controls;
  }
  createArticle() {
    if (this.articleForm.invalid) {
      this.messageService.setMessage("Please correct all errors and resubmit the form");
    } else {
      const articleData: Article = this.articleForm.value;

      this.articleService.createArticles(articleData).subscribe(
        () => {
          this.messageService.setMessage('Successfully created article with name: ' + articleData.name);
          this.articleForm.reset();
        },
        (error) => {
          this.messageService.setMessage('Error creating article: ' + error);
        }
      );
    }
  }
}

