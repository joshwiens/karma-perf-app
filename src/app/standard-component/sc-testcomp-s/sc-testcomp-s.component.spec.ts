import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompSComponent } from './sc-testcomp-s.component';

describe('ScTestcompSComponent', () => {
  let component: ScTestcompSComponent;
  let fixture: ComponentFixture<ScTestcompSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
