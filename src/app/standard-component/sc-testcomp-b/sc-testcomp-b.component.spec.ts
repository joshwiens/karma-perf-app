import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompBComponent } from './sc-testcomp-b.component';

describe('ScTestcompBComponent', () => {
  let component: ScTestcompBComponent;
  let fixture: ComponentFixture<ScTestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
