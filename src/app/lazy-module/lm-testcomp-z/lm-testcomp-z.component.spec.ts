import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompZComponent } from './lm-testcomp-z.component';

describe('LmTestcompZComponent', () => {
  let component: LmTestcompZComponent;
  let fixture: ComponentFixture<LmTestcompZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
