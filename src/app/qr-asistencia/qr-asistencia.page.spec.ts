import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrAsistenciaPage } from './qr-asistencia.page';
import { waitForAsync } from '@angular/core/testing';

describe('QrAsistenciaPage', () => {
  let component: QrAsistenciaPage;
  let fixture: ComponentFixture<QrAsistenciaPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(QrAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
