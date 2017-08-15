import { Angular2FirstTryPage } from './app.po';

describe('angular2-first-try App', () => {
  let page: Angular2FirstTryPage;

  beforeEach(() => {
    page = new Angular2FirstTryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
