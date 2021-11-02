import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TubeApiService } from 'src/services/tube-api.service';

@Component({
  selector: 'setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.css'],
})
export class SettingDialogComponent implements OnInit {
  public items: any[];
  public numberPerPageSelect: any;
  public debounceInput: string;
  public apiKeyInput: string;

  public constructor(
    private tubeApiService: TubeApiService,
    public dialogRef: MatDialogRef<SettingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.items = [5, 10, 25, 50];
    this.debounceInput = '';
    this.apiKeyInput = '';
  }

  ngOnInit() {
    if (this.tubeApiService.maxResults) {
      this.numberPerPageSelect = Number(this.tubeApiService.maxResults);
    }
    if (this.tubeApiService.apiKey) {
      this.apiKeyInput = this.tubeApiService.apiKey;
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
