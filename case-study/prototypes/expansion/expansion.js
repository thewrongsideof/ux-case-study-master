$(function () {

  function Box(options) {
    
    if (options) {
      this.selector = options.selector;
    }
    this.$el = $(this.selector);
    
    this.events = [
      {
        name: 'mouseenter',
        handler: this.mouseenter
      },
      {
        name: 'mouseleave',
        handler: this.mouseleave
      }
    ]
    
    this._bindEvents();
  }

  Box.prototype.mouseenter = function () {
    var state = {
      scale: 1.4
    };

    TweenMax.to(this, 0.1, state);
  }

  Box.prototype.mouseleave = function () {
    var state = {
      scale: 1
    };

    TweenMax.to(this, 0.1, state);
  }

  Box.prototype._bindEvents = function () {
    for(var e in this.events) {
      this.$el.on(this.events[e].name, this.events[e].handler);
    }
  };

  var box = new Box({
    selector: '.box'
  });

});