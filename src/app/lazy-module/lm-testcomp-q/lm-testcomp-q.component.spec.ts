import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompQComponent } from './lm-testcomp-q.component';

describe('Component: LmTestcompQComponent', () => {
  let component: LmTestcompQComponent;
  let fixture: ComponentFixture<LmTestcompQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
