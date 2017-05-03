import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompFComponent } from './sc-testcomp-f.component';

describe('Component: ScTestcompFComponent', () => {
  let component: ScTestcompFComponent;
  let fixture: ComponentFixture<ScTestcompFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
