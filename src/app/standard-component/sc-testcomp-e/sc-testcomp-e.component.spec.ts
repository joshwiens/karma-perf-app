import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompEComponent } from './sc-testcomp-e.component';

describe('ScTestcompEComponent', () => {
  let component: ScTestcompEComponent;
  let fixture: ComponentFixture<ScTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
