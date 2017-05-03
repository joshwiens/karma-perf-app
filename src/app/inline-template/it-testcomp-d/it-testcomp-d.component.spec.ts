import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompDComponent } from './it-testcomp-d.component';

describe('Component: ItTestcompDComponent', () => {
  let component: ItTestcompDComponent;
  let fixture: ComponentFixture<ItTestcompDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
