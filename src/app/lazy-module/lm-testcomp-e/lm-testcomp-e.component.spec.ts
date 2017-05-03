import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompEComponent } from './lm-testcomp-e.component';

describe('Component: LmTestcompEComponent', () => {
  let component: LmTestcompEComponent;
  let fixture: ComponentFixture<LmTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
