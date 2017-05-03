import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompXComponent } from './lm-testcomp-x.component';

describe('Component: LmTestcompXComponent', () => {
  let component: LmTestcompXComponent;
  let fixture: ComponentFixture<LmTestcompXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
