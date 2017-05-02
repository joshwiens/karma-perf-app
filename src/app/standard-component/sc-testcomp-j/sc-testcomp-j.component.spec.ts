import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompJComponent } from './sc-testcomp-j.component';

describe('ScTestcompJComponent', () => {
  let component: ScTestcompJComponent;
  let fixture: ComponentFixture<ScTestcompJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
