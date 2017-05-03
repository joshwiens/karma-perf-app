import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompQComponent } from './is-testcomp-q.component';

describe('Component: IsTestcompQComponent', () => {
  let component: IsTestcompQComponent;
  let fixture: ComponentFixture<IsTestcompQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
