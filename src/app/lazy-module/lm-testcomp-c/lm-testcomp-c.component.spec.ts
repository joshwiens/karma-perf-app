import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompCComponent } from './lm-testcomp-c.component';

describe('Component: LmTestcompCComponent', () => {
  let component: LmTestcompCComponent;
  let fixture: ComponentFixture<LmTestcompCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
