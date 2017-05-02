import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompQComponent } from './it-testcomp-q.component';

describe('ItTestcompQComponent', () => {
  let component: ItTestcompQComponent;
  let fixture: ComponentFixture<ItTestcompQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
