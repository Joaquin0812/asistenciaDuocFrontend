import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let authService: jasmine.SpyObj<AuthService>;
  let navController: jasmine.SpyObj<NavController>;

  beforeEach(waitForAsync(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    const navControllerSpy = jasmine.createSpyObj('NavController', ['navigateForward']);

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, FormsModule],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: NavController, useValue: navControllerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    navController = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should call authService.login and navigate to "alumno" on successful login for duoc.cl domain', async () => {
    // Arrange
    authService.login.and.returnValue(Promise.resolve(true));

    // Act
    await component.submitForm();

    // Assert
    expect(authService.login).toHaveBeenCalledWith(component.mail, component.pass);
    expect(navController.navigateForward).toHaveBeenCalledWith('alumno', jasmine.any(Object));
  });*/

  /*it('should call authService.login and navigate to "profesor" on successful login for profesor.duoc.cl domain', async () => {
    // Arrange
    component.mail = 'german@profesor.duoc.cl';
    component.pass = '12345678';
    authService.login.and.returnValue(Promise.resolve(true));

    // Act
    await component.submitForm();

    // Assert
    expect(authService.login).toHaveBeenCalledWith(component.mail, component.pass);
    expect(navController.navigateForward).toHaveBeenCalledWith('profesor', jasmine.any(Object));
  });*/

  it('should set error to true on unsuccessful login', async () => {
    // Arrange
    authService.login.and.returnValue(Promise.reject('Credenciales incorrectas'));

    // Act
    await component.submitForm();

    // Assert
    expect(authService.login).toHaveBeenCalledWith(component.mail, component.pass);
    expect(component.error).toBe(true);
  });
});
