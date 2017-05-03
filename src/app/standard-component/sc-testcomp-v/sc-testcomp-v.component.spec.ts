import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompVComponent } from './sc-testcomp-v.component';

describe('Component: ScTestcompVComponent', () => {
  let component: ScTestcompVComponent;
  let fixture: ComponentFixture<ScTestcompVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
