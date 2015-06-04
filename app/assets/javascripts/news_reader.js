window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    var feeds = new NewsReader.Collections.Feeds();
    var router = new NewsReader.Routers.Router({feeds: feeds});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
