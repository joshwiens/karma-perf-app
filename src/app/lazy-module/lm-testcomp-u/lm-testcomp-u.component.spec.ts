import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompUComponent } from './lm-testcomp-u.component';

describe('Component: LmTestcompUComponent', () => {
  let component: LmTestcompUComponent;
  let fixture: ComponentFixture<LmTestcompUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
