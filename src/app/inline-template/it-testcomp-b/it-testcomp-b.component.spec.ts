import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompBComponent } from './it-testcomp-b.component';

describe('ItTestcompBComponent', () => {
  let component: ItTestcompBComponent;
  let fixture: ComponentFixture<ItTestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
