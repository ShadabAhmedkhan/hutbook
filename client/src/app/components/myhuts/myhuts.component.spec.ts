import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhutsComponent } from './myhuts.component';

describe('MyhutsComponent', () => {
  let component: MyhutsComponent;
  let fixture: ComponentFixture<MyhutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
