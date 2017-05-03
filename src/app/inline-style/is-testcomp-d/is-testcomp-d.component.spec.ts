import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompDComponent } from './is-testcomp-d.component';

describe('Component: IsTestcompDComponent', () => {
  let component: IsTestcompDComponent;
  let fixture: ComponentFixture<IsTestcompDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
