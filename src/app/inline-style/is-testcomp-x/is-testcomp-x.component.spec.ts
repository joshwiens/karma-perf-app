import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompXComponent } from './is-testcomp-x.component';

describe('Component: IsTestcompXComponent', () => {
  let component: IsTestcompXComponent;
  let fixture: ComponentFixture<IsTestcompXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
