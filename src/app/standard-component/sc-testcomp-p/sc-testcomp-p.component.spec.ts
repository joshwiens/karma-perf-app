import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompPComponent } from './sc-testcomp-p.component';

describe('Component: ScTestcompPComponent', () => {
  let component: ScTestcompPComponent;
  let fixture: ComponentFixture<ScTestcompPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
