import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompCComponent } from './is-testcomp-c.component';

describe('Component: IsTestcompCComponent', () => {
  let component: IsTestcompCComponent;
  let fixture: ComponentFixture<IsTestcompCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
