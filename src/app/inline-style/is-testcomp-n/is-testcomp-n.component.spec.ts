import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompNComponent } from './is-testcomp-n.component';

describe('Component: IsTestcompNComponent', () => {
  let component: IsTestcompNComponent;
  let fixture: ComponentFixture<IsTestcompNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
