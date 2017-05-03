import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompCComponent } from './it-testcomp-c.component';

describe('Component: ItTestcompCComponent', () => {
  let component: ItTestcompCComponent;
  let fixture: ComponentFixture<ItTestcompCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
