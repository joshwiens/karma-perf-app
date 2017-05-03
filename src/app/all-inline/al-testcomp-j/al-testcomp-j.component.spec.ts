import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompJComponent } from './al-testcomp-j.component';

describe('Component: AlTestcompJComponent', () => {
  let component: AlTestcompJComponent;
  let fixture: ComponentFixture<AlTestcompJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
