import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompIComponent } from './al-testcomp-i.component';

describe('Component: AlTestcompIComponent', () => {
  let component: AlTestcompIComponent;
  let fixture: ComponentFixture<AlTestcompIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
