import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompVComponent } from './it-testcomp-v.component';

describe('ItTestcompVComponent', () => {
  let component: ItTestcompVComponent;
  let fixture: ComponentFixture<ItTestcompVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
