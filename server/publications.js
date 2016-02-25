Meteor.publish('page', function (title) {
  const selector = {title};
  return Pages.find(selector);
}, {
  url: '/api/page/:0',
  method: 'get'
});

Meteor.publish('page.titles', function () {
  const selector = {};
  const options = {
    fields: {elements: 0}
  };
  return Pages.find(selector, options);
});

Meteor.publish('elements', function () {
  return Elements.find({});
});

Meteor.publish('elements.page', function (title) {
  return Elements.find({pageTitle: title})
})
