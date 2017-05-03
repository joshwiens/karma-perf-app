import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompRComponent } from './is-testcomp-r.component';

describe('Component: IsTestcompRComponent', () => {
  let component: IsTestcompRComponent;
  let fixture: ComponentFixture<IsTestcompRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
