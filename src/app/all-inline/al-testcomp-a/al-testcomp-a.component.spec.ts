import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompAComponent } from './al-testcomp-a.component';

describe('Component: AlTestcompAComponent', () => {
  let component: AlTestcompAComponent;
  let fixture: ComponentFixture<AlTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
