import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompTComponent } from './sc-testcomp-t.component';

describe('ScTestcompTComponent', () => {
  let component: ScTestcompTComponent;
  let fixture: ComponentFixture<ScTestcompTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
