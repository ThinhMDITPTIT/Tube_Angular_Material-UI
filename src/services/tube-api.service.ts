import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TubeApiService {
  private _apiKey: any;
  private _order: any;
  private _maxResults: any;
  private _pageToken: any;
  private _publishedBefore: any;
  private _publishedAfter: any;
  public pageTokenEmit: EventEmitter<any>;

  constructor(private httpClient: HttpClient) {
    this.pageTokenEmit = new EventEmitter<any>();
  }

  // API key
  public get apiKey() {
    if (localStorage.getItem('API_Key')) {
      return localStorage.getItem('API_Key');
    }
    return this._apiKey;
  }
  public set apiKey(value: any) {
    this._apiKey = value;
    if (this._apiKey !== '') {
      localStorage.setItem('API_Key', this._apiKey);
    } else {
      localStorage.removeItem('API_Key');
    }
  }

  // Order
  public get order() {
    return this._order;
  }
  public set order(value: any) {
    this._order = value;
  }

  // Max Results
  public get maxResults() {
    if (localStorage.getItem('Max_Results')) {
      return localStorage.getItem('Max_Results');
    }
    return this._maxResults;
  }
  public set maxResults(value: any) {
    this._maxResults = value;
    if (this._maxResults) {
      localStorage.setItem('Max_Results', this._maxResults);
    } else {
      localStorage.removeItem('Max_Results');
    }
  }

  // Page Token
  public get pageToken() {
    return this._pageToken;
  }
  public set pageToken(value: any) {
    this._pageToken = value;
    this.pageTokenEmit.emit(this._pageToken);
  }

  // Published Before Date
  public get publishedBefore() {
    return this._publishedBefore;
  }
  public set publishedBefore(value: any) {
    this._publishedBefore = value;
  }

  // Published After Date
  public get publishedAfter() {
    return this._publishedAfter;
  }
  public set publishedAfter(value: any) {
    this._publishedAfter = value;
  }

  public getListVideosBySearchName(value: any) {
    return this.httpClient.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}`
    );
  }

  public getVideoDetailsByID(value: any) {
    return this.httpClient.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${value}`
    );
  }
}
