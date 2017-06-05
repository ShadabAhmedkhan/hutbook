import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HutUpdateComponent } from './hut-update.component';

describe('HutUpdateComponent', () => {
  let component: HutUpdateComponent;
  let fixture: ComponentFixture<HutUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HutUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HutUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
