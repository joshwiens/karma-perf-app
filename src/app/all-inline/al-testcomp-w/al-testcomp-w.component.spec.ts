import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompWComponent } from './al-testcomp-w.component';

describe('Component: AlTestcompWComponent', () => {
  let component: AlTestcompWComponent;
  let fixture: ComponentFixture<AlTestcompWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
