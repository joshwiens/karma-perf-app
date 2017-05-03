import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompTComponent } from './is-testcomp-t.component';

describe('Component: IsTestcompTComponent', () => {
  let component: IsTestcompTComponent;
  let fixture: ComponentFixture<IsTestcompTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
