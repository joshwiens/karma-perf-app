import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompHComponent } from './sc-testcomp-h.component';

describe('Component: ScTestcompHComponent', () => {
  let component: ScTestcompHComponent;
  let fixture: ComponentFixture<ScTestcompHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
