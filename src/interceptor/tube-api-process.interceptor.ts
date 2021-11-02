import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TubeApiService } from 'src/services/tube-api.service';

@Injectable()
export class TubeApiProcessInterceptor implements HttpInterceptor {
  constructor(private tubeApiService: TubeApiService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let apiKey = this.tubeApiService.apiKey;
    let order = this.tubeApiService.order;
    let maxResults = this.tubeApiService.maxResults;
    let pageToken = this.tubeApiService.pageToken;
    let publishedBefore = this.tubeApiService.publishedBefore;
    let publishedAfter = this.tubeApiService.publishedAfter;
    if (apiKey) {
      request = request.clone({
        params: request.params.set('key', apiKey),
      });
    }
    if (
      !request.url.includes('https://youtube.googleapis.com/youtube/v3/videos?')
    ) {
      if (order) {
        request = request.clone({
          params: request.params.set('order', order),
        });
      }
      if (maxResults) {
        request = request.clone({
          params: request.params.set('maxResults', maxResults),
        });
      }
      if (pageToken) {
        request = request.clone({
          params: request.params.set('pageToken', pageToken),
        });
      }
      if (publishedBefore) {
        request = request.clone({
          params: request.params.set('publishedBefore', publishedBefore),
        });
      }
      if (publishedAfter) {
        request = request.clone({
          params: request.params.set('publishedAfter', publishedAfter),
        });
      }
    }

    return next.handle(request);
  }
}
