import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoResultComponent } from './video-result.component';

describe('VideoResultComponent', () => {
  let component: VideoResultComponent;
  let fixture: ComponentFixture<VideoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
