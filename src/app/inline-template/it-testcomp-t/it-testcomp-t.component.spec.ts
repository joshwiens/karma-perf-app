import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompTComponent } from './it-testcomp-t.component';

describe('Component: ItTestcompTComponent', () => {
  let component: ItTestcompTComponent;
  let fixture: ComponentFixture<ItTestcompTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
