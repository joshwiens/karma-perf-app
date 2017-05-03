import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompYComponent } from './it-testcomp-y.component';

describe('Component: ItTestcompYComponent', () => {
  let component: ItTestcompYComponent;
  let fixture: ComponentFixture<ItTestcompYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
