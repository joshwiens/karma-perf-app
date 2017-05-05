import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsChildcompAComponent } from './is-childcomp-a.component';

describe('IsChildcompAComponent', () => {
  let component: IsChildcompAComponent;
  let fixture: ComponentFixture<IsChildcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsChildcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
