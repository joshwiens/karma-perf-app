import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ScTestcompAComponent } from './sc-testcomp-a.component';
import { ScChildcompAComponent } from './sc-childcomp-a/sc-childcomp-a.component';

describe('Content projection: ScTestcompAComponent', () => {
  let component: ScTestcompAComponent;
  let fixture: ComponentFixture<ScTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompAComponent, ScChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should project the title', () => {
      expect(fixture.debugElement.query(By.css('kwp-sc-childcomp-a'))
        .query(By.css('h1')).nativeElement.innerHTML).toContain('Test Component Title');
  });

  it('Should project the body', () => {
      expect(fixture.debugElement.query(By.css('kwp-sc-childcomp-a'))
        .query(By.css('div')).nativeElement.innerHTML).toContain('Test Component Body');
  });
});
