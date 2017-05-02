import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompTComponent } from './lm-testcomp-t.component';

describe('LmTestcompTComponent', () => {
  let component: LmTestcompTComponent;
  let fixture: ComponentFixture<LmTestcompTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
