import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HutdetailComponent } from './hutdetail.component';

describe('HutdetailComponent', () => {
  let component: HutdetailComponent;
  let fixture: ComponentFixture<HutdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HutdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HutdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
