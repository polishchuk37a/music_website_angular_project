import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestAlbumComponent } from './best-album.component';

describe('BestAlbumComponent', () => {
  let component: BestAlbumComponent;
  let fixture: ComponentFixture<BestAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
