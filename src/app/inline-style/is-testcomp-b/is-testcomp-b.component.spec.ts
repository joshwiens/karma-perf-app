import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompBComponent } from './is-testcomp-b.component';

describe('IsTestcompBComponent', () => {
  let component: IsTestcompBComponent;
  let fixture: ComponentFixture<IsTestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
