import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompDComponent } from './al-testcomp-d.component';

describe('Component: AlTestcompDComponent', () => {
  let component: AlTestcompDComponent;
  let fixture: ComponentFixture<AlTestcompDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
