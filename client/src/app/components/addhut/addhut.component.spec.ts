import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhutComponent } from './addhut.component';

describe('AddhutComponent', () => {
  let component: AddhutComponent;
  let fixture: ComponentFixture<AddhutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
