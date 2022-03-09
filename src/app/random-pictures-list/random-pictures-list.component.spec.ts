import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPicturesListComponent } from './random-pictures-list.component';

describe('RandomPicturesListComponent', () => {
  let component: RandomPicturesListComponent;
  let fixture: ComponentFixture<RandomPicturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPicturesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPicturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
