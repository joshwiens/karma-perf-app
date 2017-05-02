import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompSComponent } from './it-testcomp-s.component';

describe('ItTestcompSComponent', () => {
  let component: ItTestcompSComponent;
  let fixture: ComponentFixture<ItTestcompSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
