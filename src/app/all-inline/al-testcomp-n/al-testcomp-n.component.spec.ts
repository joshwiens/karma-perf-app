import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompNComponent } from './al-testcomp-n.component';

describe('Component: AlTestcompNComponent', () => {
  let component: AlTestcompNComponent;
  let fixture: ComponentFixture<AlTestcompNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
