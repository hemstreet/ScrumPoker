System.register("app/home/home.component.e2e-spec", [], function($__export) {
  "use strict";
  return {
    setters: [],
    execute: function() {
      describe('Home', function() {
        beforeEach(function() {
          browser.get('/');
        });
        it('should have <my-home>', function() {
          var home = element(by.css('my-app my-home'));
          expect(home.isPresent()).toEqual(true);
          expect(home.getText()).toEqual("Home Works!");
        });
      });
    }
  };
});
