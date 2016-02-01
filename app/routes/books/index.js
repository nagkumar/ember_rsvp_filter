import Ember from 'ember';

function filter() {
  return this.store.filter('book', {}, function (aBook) {
    return aBook.get('isbn') === "ISBN1";
  });
}

function sort() {
  return filter.call(this).then(sortByTitle);
}

function sortByTitle(items) { //add the sort method here..
  return items;
}

export default Ember.Route.extend({
  model: function () {
    var _this = this;
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      filteredBooks: this.store.filter('book', {}, function (aBook) {
        return aBook.get('isbn') === "ISBN2";
      }),

      filteredBooksSorted: sort.call(_this)
    });
  }
});
