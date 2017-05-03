import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompXComponent } from './it-testcomp-x.component';

describe('Component: ItTestcompXComponent', () => {
  let component: ItTestcompXComponent;
  let fixture: ComponentFixture<ItTestcompXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
