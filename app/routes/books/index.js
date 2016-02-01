import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      oldbooks: this.store.filter('book', {}, function (aBook) {
        return aBook.get('isbn') === "ISBN2";
      })
    });
  }
});
