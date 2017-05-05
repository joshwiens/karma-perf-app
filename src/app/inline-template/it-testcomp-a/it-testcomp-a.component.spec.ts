import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ItChildcompAComponent } from './it-childcomp-a/it-childcomp-a.component';
import { ItTestcompAComponent } from './it-testcomp-a.component';

describe('Component: ItTestcompAComponent', () => {
  let component: ItTestcompAComponent;
  let fixture: ComponentFixture<ItTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompAComponent, ItChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should project the title', () => {
      expect(fixture.debugElement.query(By.css('kwp-it-childcomp-a'))
        .query(By.css('h1')).nativeElement.innerHTML).toContain('Test Component Title');
  });

  it('Should project the body', () => {
      expect(fixture.debugElement.query(By.css('kwp-it-childcomp-a'))
        .query(By.css('div')).nativeElement.innerHTML).toContain('Test Component Body');
  });
});
