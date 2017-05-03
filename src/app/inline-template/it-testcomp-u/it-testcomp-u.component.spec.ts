import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompUComponent } from './it-testcomp-u.component';

describe('Component: ItTestcompUComponent', () => {
  let component: ItTestcompUComponent;
  let fixture: ComponentFixture<ItTestcompUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
