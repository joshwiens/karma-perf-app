import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompYComponent } from './is-testcomp-y.component';

describe('IsTestcompYComponent', () => {
  let component: IsTestcompYComponent;
  let fixture: ComponentFixture<IsTestcompYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
