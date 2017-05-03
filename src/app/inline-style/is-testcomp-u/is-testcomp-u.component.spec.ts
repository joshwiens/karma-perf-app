import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompUComponent } from './is-testcomp-u.component';

describe('Component: IsTestcompUComponent', () => {
  let component: IsTestcompUComponent;
  let fixture: ComponentFixture<IsTestcompUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
