import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompHComponent } from './is-testcomp-h.component';

describe('Component: IsTestcompHComponent', () => {
  let component: IsTestcompHComponent;
  let fixture: ComponentFixture<IsTestcompHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
