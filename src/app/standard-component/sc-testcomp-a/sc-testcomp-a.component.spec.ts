import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompAComponent } from './sc-testcomp-a.component';

describe('ScTestcompAComponent', () => {
  let component: ScTestcompAComponent;
  let fixture: ComponentFixture<ScTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
