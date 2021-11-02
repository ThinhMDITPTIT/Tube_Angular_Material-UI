import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TubeApiService } from 'src/services/tube-api.service';
import { TubeDataService } from 'src/services/tube-data.service';
import { SettingDialogComponent } from './setting-dialog/setting-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fa-tube';

  public orders: any[];
  public searchInput: any;
  public orderSelect: string;
  public range: FormGroup;

  public constructor(
    private dialog: MatDialog,
    private tubeDataService: TubeDataService,
    private tubeApiService: TubeApiService
  ) {
    this.orderSelect = '';
    this.orders = [
      'date',
      'rating',
      'relevance',
      'title',
      'videoCount',
      'viewCount',
    ];
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }

  ngOnInit() {
    this.tubeDataService.currentPageTokenEmit.subscribe(() => {
      this.tubeApiService
        .getListVideosBySearchName(this.tubeDataService.searchParamInput)
        .subscribe((data: any) => {
          this.tubeDataService.videoSearchResult = data;
        });
    });
  }

  public searchVideoTube() {
    if (!this.tubeApiService.apiKey) {
      alert('You need to put in YouTube API key in order for the app to work!');
    } else {
      if (this.range.get('start')?.value) {
        this.tubeApiService.publishedAfter = new Date(
          this.range.get('start')?.value
        ).toISOString();
      }
      if (this.range.get('end')?.value) {
        this.tubeApiService.publishedBefore = new Date(
          this.range.get('end')?.value
        ).toISOString();
      }
      if (this.orderSelect) {
        this.tubeApiService.order = this.orderSelect;
      }
      // Reset pageToken
      this.tubeApiService.pageToken = undefined;
      this.tubeDataService.currentPageIndex = 0;
      // Call API
      this.tubeApiService
        .getListVideosBySearchName(this.searchInput)
        .subscribe((data: any) => {
          // Set Search Param Input
          this.tubeDataService.searchParamInput = this.searchInput;

          this.tubeDataService.videoSearchResult = data;
        });
    }
  }

  public openDialog() {
    const dialogRef = this.dialog.open(SettingDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.tubeApiService.apiKey = result?.APIkey;
        this.tubeApiService.maxResults = result?.NumberPerPage;
      }
    });
  }
}
