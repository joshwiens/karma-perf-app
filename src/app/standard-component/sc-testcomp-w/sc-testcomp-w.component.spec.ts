import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompWComponent } from './sc-testcomp-w.component';

describe('Component: ScTestcompWComponent', () => {
  let component: ScTestcompWComponent;
  let fixture: ComponentFixture<ScTestcompWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
