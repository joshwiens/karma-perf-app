import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompBComponent } from './is-testcomp-b.component';

describe('Component: IsTestcompBComponent', () => {
  let component: IsTestcompBComponent;
  let fixture: ComponentFixture<IsTestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
