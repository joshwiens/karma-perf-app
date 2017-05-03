import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompBComponent } from './it-testcomp-b.component';

describe('Component: ItTestcompBComponent', () => {
  let component: ItTestcompBComponent;
  let fixture: ComponentFixture<ItTestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
