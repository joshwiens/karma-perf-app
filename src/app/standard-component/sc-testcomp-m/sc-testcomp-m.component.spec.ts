import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompMComponent } from './sc-testcomp-m.component';

describe('ScTestcompMComponent', () => {
  let component: ScTestcompMComponent;
  let fixture: ComponentFixture<ScTestcompMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
