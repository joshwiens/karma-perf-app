import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompEComponent } from './is-testcomp-e.component';

describe('IsTestcompEComponent', () => {
  let component: IsTestcompEComponent;
  let fixture: ComponentFixture<IsTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
