import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompIComponent } from './is-testcomp-i.component';

describe('IsTestcompIComponent', () => {
  let component: IsTestcompIComponent;
  let fixture: ComponentFixture<IsTestcompIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
