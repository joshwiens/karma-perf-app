import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompDComponent } from './sc-testcomp-d.component';

describe('ScTestcompDComponent', () => {
  let component: ScTestcompDComponent;
  let fixture: ComponentFixture<ScTestcompDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
