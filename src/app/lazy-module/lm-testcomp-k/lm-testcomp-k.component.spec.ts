import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompKComponent } from './lm-testcomp-k.component';

describe('LmTestcompKComponent', () => {
  let component: LmTestcompKComponent;
  let fixture: ComponentFixture<LmTestcompKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
