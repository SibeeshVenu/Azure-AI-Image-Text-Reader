import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})

export class DetectionService {
  constructor(private http: HttpClient) {
  }

  async post(url: string): Promise<any> {
    const body = {
      url: url
    };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': config.api.apiKey
      })
    };
    return await this.http.post(config.api.baseUrl, body, options).toPromise();
  }
}
