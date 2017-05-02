import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompWComponent } from './it-testcomp-w.component';

describe('ItTestcompWComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
