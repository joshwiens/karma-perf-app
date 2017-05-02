import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompCComponent } from './sc-testcomp-c.component';

describe('ScTestcompCComponent', () => {
  let component: ScTestcompCComponent;
  let fixture: ComponentFixture<ScTestcompCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
