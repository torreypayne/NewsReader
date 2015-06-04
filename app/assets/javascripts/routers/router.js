NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "index"
  },

  initialize: function(options) {
    this.feeds = options.feeds;
  },


  index: function() {
    this.indexView = new NewsReader.Views.FeedsIndex({feeds: this.feeds});
    this.feeds.fetch();
    
  }



});
