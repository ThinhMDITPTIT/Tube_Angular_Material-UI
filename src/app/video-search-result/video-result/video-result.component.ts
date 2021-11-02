import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from 'src/app/video-search-result/video-dialog/video-dialog.component';
import { TubeApiService } from 'src/services/tube-api.service';
import { TubeDataService } from 'src/services/tube-data.service';

@Component({
  selector: 'app-video-result',
  templateUrl: './video-result.component.html',
  styleUrls: ['./video-result.component.css'],
})
export class VideoResultComponent implements OnInit, OnChanges {
  @Input()
  public videoDetails: any;

  public panelOpenState: boolean;

  constructor(
    public dialog: MatDialog,
    private tubeDataService: TubeDataService,
    private tubeApiService: TubeApiService
  ) {
    this.panelOpenState = false;
  }

  ngOnChanges() {}

  ngOnInit(): void {}

  public openVideoDialog() {
    this.tubeApiService
      .getVideoDetailsByID(this.videoDetails?.id?.videoId)
      .subscribe((data: any) => {
        this.tubeDataService.currentVideoDetails = data;
      });
    this.dialog.open(VideoDialogComponent);
  }
}
