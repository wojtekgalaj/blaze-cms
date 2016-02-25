FlowRouter.route('/', {
  action: function () {
    FlowRouter.redirect('/page/home')
  }
})


FlowRouter.route('/page/:title', {
  action: function(params, queryParams) {
    console.log("Yeah! We are on the page:", params.title);
  }
});
