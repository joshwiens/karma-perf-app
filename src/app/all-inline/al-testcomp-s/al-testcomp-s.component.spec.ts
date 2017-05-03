import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompSComponent } from './al-testcomp-s.component';

describe('Component: AlTestcompSComponent', () => {
  let component: AlTestcompSComponent;
  let fixture: ComponentFixture<AlTestcompSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
