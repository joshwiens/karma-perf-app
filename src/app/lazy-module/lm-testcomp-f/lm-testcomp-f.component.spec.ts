import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompFComponent } from './lm-testcomp-f.component';

describe('LmTestcompFComponent', () => {
  let component: LmTestcompFComponent;
  let fixture: ComponentFixture<LmTestcompFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
