import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompZComponent } from './it-testcomp-z.component';

describe('Component: ItTestcompZComponent', () => {
  let component: ItTestcompZComponent;
  let fixture: ComponentFixture<ItTestcompZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
