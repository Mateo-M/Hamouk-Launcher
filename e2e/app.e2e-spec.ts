import { AngularElectronPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('angular-electron App', () => {
  let page: AngularElectronPage;

  beforeEach(() => {
    page = new AngularElectronPage();
  });

  it('should display message saying Login', () => {
    page.navigateTo('/');
    expect(element(by.css('app-login h1')).getText()).toMatch('Login');
  });
});
