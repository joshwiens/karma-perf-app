import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompIComponent } from './sc-testcomp-i.component';

describe('ScTestcompIComponent', () => {
  let component: ScTestcompIComponent;
  let fixture: ComponentFixture<ScTestcompIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
