import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompOComponent } from './is-testcomp-o.component';

describe('Component: IsTestcompOComponent', () => {
  let component: IsTestcompOComponent;
  let fixture: ComponentFixture<IsTestcompOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
