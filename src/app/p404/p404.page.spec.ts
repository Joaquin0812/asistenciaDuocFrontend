import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P404Page } from './p404.page';
import { waitForAsync } from '@angular/core/testing';

describe('P404Page', () => {
  let component: P404Page;
  let fixture: ComponentFixture<P404Page>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(P404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
