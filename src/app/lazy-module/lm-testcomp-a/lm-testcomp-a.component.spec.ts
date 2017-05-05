import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LmChildcompAComponent } from './lm-childcomp-a/lm-childcomp-a.component';
import { LmTestcompAComponent } from './lm-testcomp-a.component';

describe('Component: LmTestcompAComponent', () => {
  let component: LmTestcompAComponent;
  let fixture: ComponentFixture<LmTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompAComponent, LmChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should project the title', () => {
      expect(fixture.debugElement.query(By.css('kwp-lm-childcomp-a'))
        .query(By.css('h1')).nativeElement.innerHTML).toContain('Test Component Title');
  });

  it('Should project the body', () => {
      expect(fixture.debugElement.query(By.css('kwp-lm-childcomp-a'))
        .query(By.css('div')).nativeElement.innerHTML).toContain('Test Component Body');
  });
});
