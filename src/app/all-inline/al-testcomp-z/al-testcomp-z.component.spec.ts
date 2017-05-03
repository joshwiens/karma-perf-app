import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompZComponent } from './al-testcomp-z.component';

describe('Component: AlTestcompZComponent', () => {
  let component: AlTestcompZComponent;
  let fixture: ComponentFixture<AlTestcompZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
