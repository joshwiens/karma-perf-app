import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompWComponent } from './is-testcomp-w.component';

describe('IsTestcompWComponent', () => {
  let component: IsTestcompWComponent;
  let fixture: ComponentFixture<IsTestcompWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
