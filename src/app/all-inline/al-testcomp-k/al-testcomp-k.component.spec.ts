import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompKComponent } from './al-testcomp-k.component';

describe('Component: AlTestcompKComponent', () => {
  let component: AlTestcompKComponent;
  let fixture: ComponentFixture<AlTestcompKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
