import { ChaskiyQurpaPage } from './app.po';

describe('chaskiy-qurpa App', () => {
  let page: ChaskiyQurpaPage;

  beforeEach(() => {
    page = new ChaskiyQurpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
