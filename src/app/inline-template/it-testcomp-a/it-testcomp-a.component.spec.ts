import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompAComponent } from './it-testcomp-a.component';

describe('ItTestcompAComponent', () => {
  let component: ItTestcompAComponent;
  let fixture: ComponentFixture<ItTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
