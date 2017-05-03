import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompKComponent } from './sc-testcomp-k.component';

describe('Component: ScTestcompKComponent', () => {
  let component: ScTestcompKComponent;
  let fixture: ComponentFixture<ScTestcompKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
