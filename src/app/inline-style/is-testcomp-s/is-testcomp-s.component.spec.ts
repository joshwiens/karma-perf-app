import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompSComponent } from './is-testcomp-s.component';

describe('IsTestcompSComponent', () => {
  let component: IsTestcompSComponent;
  let fixture: ComponentFixture<IsTestcompSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
