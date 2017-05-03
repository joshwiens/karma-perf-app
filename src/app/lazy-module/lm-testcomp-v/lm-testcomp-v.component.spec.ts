import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompVComponent } from './lm-testcomp-v.component';

describe('Component: LmTestcompVComponent', () => {
  let component: LmTestcompVComponent;
  let fixture: ComponentFixture<LmTestcompVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
