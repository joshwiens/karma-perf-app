import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompUComponent } from './is-testcomp-u.component';

describe('IsTestcompUComponent', () => {
  let component: IsTestcompUComponent;
  let fixture: ComponentFixture<IsTestcompUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
