window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var content = $('#content');
    var router = new NewsReader.Routers.Router({ $rootEl: content });
    Backbone.history.start();
  }
};

$(document).ready(function(){

  NewsReader.initialize();
});
