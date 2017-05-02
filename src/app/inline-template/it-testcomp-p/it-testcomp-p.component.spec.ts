import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompPComponent } from './it-testcomp-p.component';

describe('ItTestcompPComponent', () => {
  let component: ItTestcompPComponent;
  let fixture: ComponentFixture<ItTestcompPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
