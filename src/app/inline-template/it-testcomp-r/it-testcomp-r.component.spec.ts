import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompRComponent } from './it-testcomp-r.component';

describe('Component: ItTestcompRComponent', () => {
  let component: ItTestcompRComponent;
  let fixture: ComponentFixture<ItTestcompRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
