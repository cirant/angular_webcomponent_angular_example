import { AngularCwImplmentationPage } from './app.po';

describe('angular-cw-implmentation App', () => {
  let page: AngularCwImplmentationPage;

  beforeEach(() => {
    page = new AngularCwImplmentationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
