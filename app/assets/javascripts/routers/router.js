NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "index",
    'feeds/:id' : 'feedShow'
  },

  initialize: function(options) {
    this.feeds = new NewsReader.Collections.Feeds();
    this.$rootEl = options.$rootEl;
  },


  index: function () {
    this.indexView = new NewsReader.Views.FeedsIndex({collection: this.feeds});
    this.feeds.fetch();
    this.$rootEl.html(this.indexView.$el);
  },

  feedShow: function(id) {
    var feed = this.feeds.getOrFetch(id);
    var feedShow = new NewsReader.Views.FeedShow({model: feed});

    feed.fetch();
    this.$rootEl.html(feedShow.$el);
  }

});
