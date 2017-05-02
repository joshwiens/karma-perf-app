import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompZComponent } from './sc-testcomp-z.component';

describe('ScTestcompZComponent', () => {
  let component: ScTestcompZComponent;
  let fixture: ComponentFixture<ScTestcompZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
