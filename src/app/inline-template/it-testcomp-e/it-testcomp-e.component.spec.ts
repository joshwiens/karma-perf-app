import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompEComponent } from './it-testcomp-e.component';

describe('Component: ItTestcompEComponent', () => {
  let component: ItTestcompEComponent;
  let fixture: ComponentFixture<ItTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
