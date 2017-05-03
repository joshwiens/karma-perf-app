import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompUComponent } from './sc-testcomp-u.component';

describe('Component: ScTestcompUComponent', () => {
  let component: ScTestcompUComponent;
  let fixture: ComponentFixture<ScTestcompUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
