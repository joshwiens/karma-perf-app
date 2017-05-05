import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ItTestcompCComponent } from './it-testcomp-c.component';

describe('Component: ItTestcompCComponent', () => {
  let component: ItTestcompCComponent;
  let fixture: ComponentFixture<ItTestcompCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have the .active class if isActive is set true', () => {
    component.isActive = true;
    fixture.detectChanges();

    const classes: any = fixture.debugElement.query(By.css('div')).classes;
    expect(classes.active).toBeTruthy();
    expect(classes.inactive).toBeFalsy();
  });

  it('Should have the .inactive class if isActive is set false', () => {
    component.isActive = false;
    fixture.detectChanges();

    const classes: any = fixture.debugElement.query(By.css('div')).classes;
    expect(classes.inactive).toBeTruthy();
    expect(classes.active).toBeFalsy();
  });
});
