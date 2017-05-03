import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompTComponent } from './al-testcomp-t.component';

describe('Component: AlTestcompTComponent', () => {
  let component: AlTestcompTComponent;
  let fixture: ComponentFixture<AlTestcompTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
