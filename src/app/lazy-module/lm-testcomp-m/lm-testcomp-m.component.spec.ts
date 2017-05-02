import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompMComponent } from './lm-testcomp-m.component';

describe('LmTestcompMComponent', () => {
  let component: LmTestcompMComponent;
  let fixture: ComponentFixture<LmTestcompMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
