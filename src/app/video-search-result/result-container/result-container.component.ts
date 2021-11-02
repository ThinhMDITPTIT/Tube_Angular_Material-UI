import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TubeDataService } from 'src/services/tube-data.service';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.css'],
})
export class ResultContainerComponent implements OnInit {
  public videoSearchResult: any;

  // MatPaginator Input
  public currentPageIndex: any = 0;
  public lengthPaginator: number;
  public pageSizePaginator: number;

  // MatPaginator Output
  public pageEvent: PageEvent;

  constructor(private tubeDataService: TubeDataService) {
    this.pageEvent = new PageEvent();
    this.lengthPaginator = 0;
    this.pageSizePaginator = 25;
  }

  ngOnInit(): void {
    this.tubeDataService.reloadPageEmit.subscribe(() => {
      this.currentPageIndex = 0;
    });
    this.tubeDataService.videoSearchResultEmit.subscribe((data: any) => {
      this.videoSearchResult = data;

      this.lengthPaginator = Number(
        this.videoSearchResult.pageInfo.totalResults
      );
      this.pageSizePaginator = Number(
        this.videoSearchResult.pageInfo.resultsPerPage
      );
    });
  }

  public handlePaginatorChange(event?: PageEvent) {
    console.log('page_index: ', event?.pageIndex);

    this.currentPageIndex = event?.pageIndex;
    this.tubeDataService.currentPageIndex = event?.pageIndex;
  }
}
