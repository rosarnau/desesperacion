import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'; 
import { Article } from './article/article-item/article-item.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {


  constructor(private http: HttpClient) {}

  
   getArticles() : Observable<Article []>{
    return this.http.get<Article []>('/api/article');
   }

   createArticles(article: Article):Observable<any>{
    return this.http.post('/api/stock', article);
   }

   changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    const url = `${this.apiUrl}/${articleID}`;
    const patchData = { changeInQuantity }; // Datos para la solicitud PATCH

    return this.http.patch<Article>(url, patchData).pipe(
      map((article: Article) => {
        // La solicitud fue exitosa, devuelve el artículo actualizado
        return article;
      }),
      catchError((error) => {
        console.error('Error al cambiar la cantidad del artículo:', error);
        return throwError(() => new Error('Error al cambiar la cantidad del artículo'));
      })
    );
  }
}

