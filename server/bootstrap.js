Meteor.startup(function () {
  if (!Pages.findOne()) {
    Pages.insert({
      title: 'home',
      elements: [
        {
          order: 0,
          component: 'PageTitle',
          data: {
            title: 'Home Page',
            subTitle: 'First page you see, duh.'
          }
        },
        {
          order: 1,
          component: 'TextBlock',
          data: {
            text: 'First page you see, duh. This should support markdown'
          }
        }
      ]
    });

    Pages.insert({
      title: 'contact',
      elements: [
        {
          order: 0,
          component: 'PageTitle',
          data: {
            title: 'Contect Page',
            subTitle: 'Here we are, just holla!'
          }
        },
        {
          order: 1,
          component: 'ContactInfo',
          data: {
            tel: '+31 777 77 77 77',
            email: 'holla@packlink.es'
          }
        }
      ]
    });

    let aviableComponents = [
      {componentName: 'PageTitle'},
      {componentName: 'TextBlock'},
      {componentName: 'ContactInfo'}
    ]

    aviableComponents.forEach(function (el) {
      Elements.insert(el)
    })

  }
})
