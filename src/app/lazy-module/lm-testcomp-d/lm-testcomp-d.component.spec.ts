import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompDComponent } from './lm-testcomp-d.component';

describe('Component: LmTestcompDComponent', () => {
  let component: LmTestcompDComponent;
  let fixture: ComponentFixture<LmTestcompDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
