import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompLComponent } from './al-testcomp-l.component';

describe('Component: AlTestcompLComponent', () => {
  let component: AlTestcompLComponent;
  let fixture: ComponentFixture<AlTestcompLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
