import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompWComponent } from './it-testcomp-w.component';

describe('Component: ItTestcompWComponent', () => {
  let component: ItTestcompWComponent;
  let fixture: ComponentFixture<ItTestcompWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
