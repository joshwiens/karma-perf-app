import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompIComponent } from './is-testcomp-i.component';

describe('Component: IsTestcompIComponent', () => {
  let component: IsTestcompIComponent;
  let fixture: ComponentFixture<IsTestcompIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
