import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'; 
import { Article } from './article/article-item/article-item.component';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private apiUrl = 'http://localhost:3000/api/articles'
  constructor(private http: HttpClient) {}

  
   getArticles() : Observable<Article []>{
    return this.http.get<Article []>(this.apiUrl, {
      headers: new HttpHeaders()                       
          .set('Authorization', 'MyAuthorizationHeaderValue')
          .set('X-EXAMPLE-HEADER', 'TestValue'),
      params: {                                        
        q: 'test',
        test: 'value'
      },
      observe: 'body'                 
    });
   }

   getArticlesAsResponse(): Observable<HttpResponse<Article[]>> {
    return this.http.get<Article[]>(this.apiUrl, {
      observe: 'response' 
    });
  }

  getArticlesAsEvents(): Observable<HttpEvent<any>> {
    return this.http.get('api/article', {
      observe: 'events'                  
    });
  }

  getArticlesAsString(): Observable<string> {
    return this.http.get(this.apiUrl, {
      responseType: 'text'  
    }); 
  } 
    
  getArticlesAsBlob(): Observable<Blob> {
      return this.http.get(this.apiUrl, {
        responseType: 'blob'                  
      });
    }


   createArticles(article: Article):Observable<any>{
    return this.http.post(this.apiUrl, article);
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

