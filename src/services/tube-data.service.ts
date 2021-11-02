import { EventEmitter, Injectable } from '@angular/core';
import { TubeApiService } from './tube-api.service';

@Injectable({
  providedIn: 'root',
})
export class TubeDataService {
  private _videoSearchResult: any;
  private _currentVideoDetails: any;
  private _currentPageIndex: number;
  private _searchParamInput: any;
  public videoSearchResultEmit: EventEmitter<any>;
  public currentVideoDetailsEmit: EventEmitter<any>;
  public currentPageTokenEmit: EventEmitter<any>;
  public reloadPageEmit: EventEmitter<any>;

  constructor(private tubeApiService: TubeApiService) {
    this._currentPageIndex = 0;
    this.videoSearchResultEmit = new EventEmitter<any>();
    this.currentVideoDetailsEmit = new EventEmitter<any>();
    this.currentPageTokenEmit = new EventEmitter<any>();
    this.reloadPageEmit = new EventEmitter<any>();
  }

  public get searchParamInput() {
    return this._searchParamInput;
  }
  public set searchParamInput(value: any) {
    this._searchParamInput = value;
    this.reloadPageEmit.emit(value);
  }

  public get videoSearchResult() {
    return this._videoSearchResult;
  }
  public set videoSearchResult(value: any) {
    this._videoSearchResult = value;
    this.videoSearchResultEmit.emit(this._videoSearchResult);
  }

  public get currentVideoDetails() {
    return this._currentVideoDetails;
  }
  public set currentVideoDetails(value: any) {
    this._currentVideoDetails = value;
    this.currentVideoDetailsEmit.emit(this._currentVideoDetails);
  }

  public get currentPageIndex() {
    return this._currentPageIndex;
  }
  public set currentPageIndex(value: any) {
    if (value === this._currentPageIndex) {
      if (this._currentPageIndex !== 0) {
        this._currentPageIndex = 0;
      }
    } else {
      if (value > this._currentPageIndex) {
        this._currentPageIndex = value;
        this.tubeApiService.pageToken = this.videoSearchResult.nextPageToken;
        this.currentPageTokenEmit.emit(this.videoSearchResult.nextPageToken);
      } else {
        this._currentPageIndex = value;
        this.tubeApiService.pageToken = this.videoSearchResult.prevPageToken;
        this.currentPageTokenEmit.emit(this.videoSearchResult.prevPageToken);
      }
    }
  }
}
