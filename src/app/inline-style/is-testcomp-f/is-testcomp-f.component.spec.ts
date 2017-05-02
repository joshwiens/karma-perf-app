import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompFComponent } from './is-testcomp-f.component';

describe('IsTestcompFComponent', () => {
  let component: IsTestcompFComponent;
  let fixture: ComponentFixture<IsTestcompFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
