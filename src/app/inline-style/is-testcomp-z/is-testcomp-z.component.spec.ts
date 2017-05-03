import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompZComponent } from './is-testcomp-z.component';

describe('Component: IsTestcompZComponent', () => {
  let component: IsTestcompZComponent;
  let fixture: ComponentFixture<IsTestcompZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
