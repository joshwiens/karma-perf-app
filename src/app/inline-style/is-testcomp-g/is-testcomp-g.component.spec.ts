import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompGComponent } from './is-testcomp-g.component';

describe('IsTestcompGComponent', () => {
  let component: IsTestcompGComponent;
  let fixture: ComponentFixture<IsTestcompGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
