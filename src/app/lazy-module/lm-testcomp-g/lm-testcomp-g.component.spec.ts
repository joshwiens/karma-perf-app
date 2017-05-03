import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompGComponent } from './lm-testcomp-g.component';

describe('Component: LmTestcompGComponent', () => {
  let component: LmTestcompGComponent;
  let fixture: ComponentFixture<LmTestcompGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
