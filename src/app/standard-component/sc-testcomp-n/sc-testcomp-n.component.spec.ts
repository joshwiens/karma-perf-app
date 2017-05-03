import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompNComponent } from './sc-testcomp-n.component';

describe('Component: ScTestcompNComponent', () => {
  let component: ScTestcompNComponent;
  let fixture: ComponentFixture<ScTestcompNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
