import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompOComponent } from './sc-testcomp-o.component';

describe('Component: ScTestcompOComponent', () => {
  let component: ScTestcompOComponent;
  let fixture: ComponentFixture<ScTestcompOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
