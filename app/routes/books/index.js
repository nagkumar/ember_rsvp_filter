import Ember from 'ember';

function filter() {
  return this.store.filter('book', {}, function (aBook) {
    return aBook.get('isbn') === "ISBN2";
  });
}

function sort() {
  var _this = this;
  var storeRef = this.store;
  return storeRef.findAll('book').then(function () {
    return filter.call(_this).then(function (books) {
      return books.sortBy('title');
    });
  });
}
export default Ember.Route.extend({

  model: function () {
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      filteredBooks: filter.call(this),
      filteredBooksSorted: sort.call(this)
    });
  }
});
