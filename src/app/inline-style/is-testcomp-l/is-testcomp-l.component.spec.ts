import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompLComponent } from './is-testcomp-l.component';

describe('IsTestcompLComponent', () => {
  let component: IsTestcompLComponent;
  let fixture: ComponentFixture<IsTestcompLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
