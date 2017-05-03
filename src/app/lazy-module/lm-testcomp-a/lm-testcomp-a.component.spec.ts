import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompAComponent } from './lm-testcomp-a.component';

describe('Component: LmTestcompAComponent', () => {
  let component: LmTestcompAComponent;
  let fixture: ComponentFixture<LmTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
