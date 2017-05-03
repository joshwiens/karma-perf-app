import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompLComponent } from './sc-testcomp-l.component';

describe('Component: ScTestcompLComponent', () => {
  let component: ScTestcompLComponent;
  let fixture: ComponentFixture<ScTestcompLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
