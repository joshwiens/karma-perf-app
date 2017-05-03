import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInlineComponent } from './all-inline.component';

describe('AllInlineComponent', () => {
  let component: AllInlineComponent;
  let fixture: ComponentFixture<AllInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
