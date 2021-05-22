import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDescComponent } from './watch-desc.component';

describe('WatchDescComponent', () => {
  let component: WatchDescComponent;
  let fixture: ComponentFixture<WatchDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
