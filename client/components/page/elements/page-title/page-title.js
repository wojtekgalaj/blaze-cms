Template.PageTitle.helpers({
  getTitle: function () {
    var self = this;
    return {
      // Set html content
      _value: self.data.title,
      // Preserving cursor markers
      _keepMarkers: true,
      // Override wrapper class
      _className: "froala-reactive-meteorized-override",

      // Set some FE options
      toolbarInline: true,
      charCounterCount: false,
      initOnClick: true,
      tabSpaces: false,

      // FE save.before event handler function:
      "_onsave.before": function (e, editor) {
        // Get edited HTML from Froala-Editor
        var newHTML = editor.html.get(true /* keep_markers */);
        // Do something to update the edited value provided by the Froala-Editor plugin, if it has changed:
        if (!_.isEqual(newHTML, self.data.title)) {
          console.log("onSave HTML is :"+newHTML);
          // Page.update({_id: self._id}, {
          //   $set: {title: newHTML}
          // });
        }
        return false; // Stop Froala Editor from POSTing to the Save URL
      },
    }
  },
  getSubTitle: function () {
    var self = this;
    return {
      // Set html content
      _value: self.data.subTitle,
      // Preserving cursor markers
      _keepMarkers: true,
      // Override wrapper class
      _className: "froala-reactive-meteorized-override",

      // Set some FE options
      toolbarInline: true,
      initOnClick: false,
      tabSpaces: false,

      // FE save.before event handler function:
      "_onsave.before": function (e, editor) {
        // Get edited HTML from Froala-Editor
        var newHTML = editor.html.get(true /* keep_markers */);
        // Do something to update the edited value provided by the Froala-Editor plugin, if it has changed:
        if (!_.isEqual(newHTML, self.data.subTitle)) {
          console.log("onSave HTML is :"+newHTML);
          // Page.update({_id: self._id}, {
          //   $set: {title: newHTML}
          // });
        }
        return false; // Stop Froala Editor from POSTing to the Save URL
      },
    }
  }

})
