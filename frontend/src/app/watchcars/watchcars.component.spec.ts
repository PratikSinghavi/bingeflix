import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchcarsComponent } from './watchcars.component';

describe('WatchcarsComponent', () => {
  let component: WatchcarsComponent;
  let fixture: ComponentFixture<WatchcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
