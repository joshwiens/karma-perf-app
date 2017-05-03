import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompIComponent } from './it-testcomp-i.component';

describe('Component: ItTestcompIComponent', () => {
  let component: ItTestcompIComponent;
  let fixture: ComponentFixture<ItTestcompIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
