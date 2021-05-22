import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTypeaheadComponent } from './search-typeahead.component';

describe('SearchTypeaheadComponent', () => {
  let component: SearchTypeaheadComponent;
  let fixture: ComponentFixture<SearchTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTypeaheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
