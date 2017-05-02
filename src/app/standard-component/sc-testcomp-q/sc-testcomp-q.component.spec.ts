import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompQComponent } from './sc-testcomp-q.component';

describe('ScTestcompQComponent', () => {
  let component: ScTestcompQComponent;
  let fixture: ComponentFixture<ScTestcompQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
