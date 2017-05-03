import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompJComponent } from './it-testcomp-j.component';

describe('Component: ItTestcompJComponent', () => {
  let component: ItTestcompJComponent;
  let fixture: ComponentFixture<ItTestcompJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
