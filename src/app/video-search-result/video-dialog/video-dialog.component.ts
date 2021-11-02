import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TubeDataService } from 'src/services/tube-data.service';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css'],
})
export class VideoDialogComponent implements OnInit {
  public videoUrl: any;
  constructor(
    public dialogRef: MatDialogRef<VideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tubeDataService: TubeDataService
  ) {}

  ngOnInit(): void {
    this.tubeDataService.currentVideoDetailsEmit.subscribe((data: any) => {
      this.videoUrl = `https://www.youtube.com/embed/${data.items[0].id}`;
    });
  }

  public onVideoNoClick(): void {
    this.dialogRef.close();
  }
}
