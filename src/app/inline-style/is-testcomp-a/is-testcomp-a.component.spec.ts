import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompAComponent } from './is-testcomp-a.component';

describe('IsTestcompAComponent', () => {
  let component: IsTestcompAComponent;
  let fixture: ComponentFixture<IsTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
