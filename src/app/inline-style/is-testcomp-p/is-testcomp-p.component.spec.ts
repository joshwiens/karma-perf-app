import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompPComponent } from './is-testcomp-p.component';

describe('Component: IsTestcompPComponent', () => {
  let component: IsTestcompPComponent;
  let fixture: ComponentFixture<IsTestcompPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
