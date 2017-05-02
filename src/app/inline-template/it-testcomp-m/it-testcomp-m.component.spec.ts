import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompMComponent } from './it-testcomp-m.component';

describe('ItTestcompMComponent', () => {
  let component: ItTestcompMComponent;
  let fixture: ComponentFixture<ItTestcompMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
