import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompRComponent } from './sc-testcomp-r.component';

describe('ScTestcompRComponent', () => {
  let component: ScTestcompRComponent;
  let fixture: ComponentFixture<ScTestcompRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
