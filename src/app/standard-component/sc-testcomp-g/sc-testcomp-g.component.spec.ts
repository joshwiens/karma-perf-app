import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompGComponent } from './sc-testcomp-g.component';

describe('ScTestcompGComponent', () => {
  let component: ScTestcompGComponent;
  let fixture: ComponentFixture<ScTestcompGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
