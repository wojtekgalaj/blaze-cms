Template.nav.onCreated(function () {
  this.subscribe('page.titles')
})

Template.nav.helpers({
  pageTitles: function () {
    const selector = {};
    const options = {
      fields: {elements: 0}
    };
    return Pages.find(selector, options);
  }
})
