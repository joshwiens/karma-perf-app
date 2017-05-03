import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompHComponent } from './al-testcomp-h.component';

describe('Component: AlTestcompHComponent', () => {
  let component: AlTestcompHComponent;
  let fixture: ComponentFixture<AlTestcompHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
