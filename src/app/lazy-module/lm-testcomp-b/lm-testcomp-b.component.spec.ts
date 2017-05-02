import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompBComponent } from './lm-testcomp-b.component';

describe('LmTestcompBComponent', () => {
  let component: LmTestcompBComponent;
  let fixture: ComponentFixture<LmTestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
