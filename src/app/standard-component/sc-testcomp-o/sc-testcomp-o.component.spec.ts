import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTestcompOComponent } from './sc-testcomp-o.component';

describe('ScTestcompOComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
