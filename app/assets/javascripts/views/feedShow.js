NewsReader.Views.FeedShow = Backbone.View.extend({

  template: JST['feeds/show'],

  events: {
    "click button.btn-refresh" : "refresh"
  },

  initialize: function(options) {
    // this.feeds = options.feeds;
    this.listenTo(this.model,"sync",this.render);
  },

  render: function() {
    this.$el.empty();
    var entryItem = this.template({ feed: this.model });
    this.$el.append(entryItem);
  },

  refresh: function() {
    console.log('works!');
    this.model.fetch({
      success: function() {
        this.render();
      }.bind(this)
    });
  }

});
