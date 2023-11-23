import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlayerPageComponent } from './media-player-page.component';

describe('MediaPlayerPageComponent', () => {
  let component: MediaPlayerPageComponent;
  let fixture: ComponentFixture<MediaPlayerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPlayerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
