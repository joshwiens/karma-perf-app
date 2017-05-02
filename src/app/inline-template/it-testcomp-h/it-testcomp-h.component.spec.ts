import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompHComponent } from './it-testcomp-h.component';

describe('ItTestcompHComponent', () => {
  let component: ItTestcompHComponent;
  let fixture: ComponentFixture<ItTestcompHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
