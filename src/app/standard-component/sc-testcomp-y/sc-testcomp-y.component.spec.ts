import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompYComponent } from './sc-testcomp-y.component';

describe('Component: ScTestcompYComponent', () => {
  let component: ScTestcompYComponent;
  let fixture: ComponentFixture<ScTestcompYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
