import { NgecommercePage } from './app.po';

describe('ngecommerce App', function() {
  let page: NgecommercePage;

  beforeEach(() => {
    page = new NgecommercePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
