import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompVComponent } from './is-testcomp-v.component';

describe('IsTestcompVComponent', () => {
  let component: IsTestcompVComponent;
  let fixture: ComponentFixture<IsTestcompVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
