import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompXComponent } from './sc-testcomp-x.component';

describe('ScTestcompXComponent', () => {
  let component: ScTestcompXComponent;
  let fixture: ComponentFixture<ScTestcompXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
