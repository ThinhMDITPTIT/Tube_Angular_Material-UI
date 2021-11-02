import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultContainerComponent } from './result-container/result-container.component';
import { VideoResultComponent } from './video-result/video-result.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import { SafeUrlPipe } from 'src/pipes/safe-url.pipe';

@NgModule({
  declarations: [
    ResultContainerComponent,
    VideoResultComponent,
    VideoDialogComponent,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [
    ResultContainerComponent,
    VideoResultComponent,
    VideoDialogComponent,
  ],
})
export class VideoSearchResultModule {}
