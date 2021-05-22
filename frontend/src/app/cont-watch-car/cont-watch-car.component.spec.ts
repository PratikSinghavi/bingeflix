import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContWatchCarComponent } from './cont-watch-car.component';

describe('ContWatchCarComponent', () => {
  let component: ContWatchCarComponent;
  let fixture: ComponentFixture<ContWatchCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContWatchCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContWatchCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
