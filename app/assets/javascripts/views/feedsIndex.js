NewsReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],

  initialize: function(options) {
    // this.feeds = options.feeds;
    this.listenTo(this.collection,"sync",this.render);
  },

  render: function() {
    this.collection.each(function(feed) {
      var feedItem = this.template({ feed: feed });
      this.$el.append(feedItem);
    }.bind(this));
    return this;
  }

});
