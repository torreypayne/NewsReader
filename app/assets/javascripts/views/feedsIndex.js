NewsReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],

  initialize: function(options) {
    this.feeds = options.feeds;
    this.listenTo(this.feeds,"sync",this.render);
  },

  render: function() {
    this.feeds.each(function(feed) {
      var feedItem = this.template({ feed: feed });
      this.$el.append(feedItem);
    });
    return this;
  }

});
