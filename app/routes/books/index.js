import Ember from 'ember';

function filter() {
  return this.store.filter('book', {}, function (aBook) {
    return aBook.get('isbn') === "ISBN1";
  });
}

function sort() {
  var storeRef = this.store;
  return storeRef.findAll('book').then(function () {
    return storeRef.filter('book', function (record) {
      return record.get('isbn') === 'ISBN2';
    }).then(function (books) {
      return books.sortBy('title');
    });
  });
}
export default Ember.Route.extend({

  model: function () {
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      filteredBooks: this.store.filter('book', {}, function (aBook) {
        return aBook.get('isbn') === "ISBN2";
      }),

      filteredBooksSorted: sort.call(this)
    });
  }
});
