import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompJComponent } from './lm-testcomp-j.component';

describe('LmTestcompJComponent', () => {
  let component: LmTestcompJComponent;
  let fixture: ComponentFixture<LmTestcompJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
