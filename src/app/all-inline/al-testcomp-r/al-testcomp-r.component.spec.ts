import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompRComponent } from './al-testcomp-r.component';

describe('Component: AlTestcompRComponent', () => {
  let component: AlTestcompRComponent;
  let fixture: ComponentFixture<AlTestcompRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
