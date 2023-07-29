describe('Clip', () => {
    it('should play clip', () => {
      cy.visit('/');
      cy.wait(3000);
      cy.get('app-clips-list > .grid a:first').click();
      cy.wait(3000);
      cy.get('.vjs-big-play-button').click();
      cy.wait(3000);
      cy.get('#vjs_video_3_html5_api').click();
      cy.get('.vjs-play-progress').invoke('width').should('gte', 0);
    });
  });