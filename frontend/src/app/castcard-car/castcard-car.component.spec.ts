import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastcardCarComponent } from './castcard-car.component';

describe('CastcardCarComponent', () => {
  let component: CastcardCarComponent;
  let fixture: ComponentFixture<CastcardCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastcardCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastcardCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
