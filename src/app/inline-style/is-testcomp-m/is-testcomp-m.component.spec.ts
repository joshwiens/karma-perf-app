import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompMComponent } from './is-testcomp-m.component';

describe('IsTestcompMComponent', () => {
  let component: IsTestcompMComponent;
  let fixture: ComponentFixture<IsTestcompMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
