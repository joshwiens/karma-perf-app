import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompLComponent } from './it-testcomp-l.component';

describe('Component: ItTestcompLComponent', () => {
  let component: ItTestcompLComponent;
  let fixture: ComponentFixture<ItTestcompLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
