import { RankingsFrontendPage } from './app.po';

describe('rankings-frontend App', function() {
  let page: RankingsFrontendPage;

  beforeEach(() => {
    page = new RankingsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
