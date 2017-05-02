import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompWComponent } from './lm-testcomp-w.component';

describe('LmTestcompWComponent', () => {
  let component: LmTestcompWComponent;
  let fixture: ComponentFixture<LmTestcompWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
