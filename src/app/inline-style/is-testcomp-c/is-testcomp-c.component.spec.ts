import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { IsTestcompCComponent } from './is-testcomp-c.component';

describe('Component: IsTestcompCComponent', () => {
  let component: IsTestcompCComponent;
  let fixture: ComponentFixture<IsTestcompCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompCComponent);
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
