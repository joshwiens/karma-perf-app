import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompGComponent } from './it-testcomp-g.component';

describe('ItTestcompGComponent', () => {
  let component: ItTestcompGComponent;
  let fixture: ComponentFixture<ItTestcompGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
