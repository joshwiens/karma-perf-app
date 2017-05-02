import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompLComponent } from './lm-testcomp-l.component';

describe('LmTestcompLComponent', () => {
  let component: LmTestcompLComponent;
  let fixture: ComponentFixture<LmTestcompLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
