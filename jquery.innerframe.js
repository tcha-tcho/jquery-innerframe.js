/**
 * Jquery innerframe
 *
 * @author       Bruno Thiago Leite Agutoli <bruno.agutoli@gmail.com>
 * @collatorated Tcha-Tcho <tchatcho66@hotmail.com>
 * @version      Release: 0.0.1-alpha
 * @license      http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 */
(function( $ ) {

  $.fn.innerframe = function(string, options) {

    //var selector
    var $this = $(this);

    //defaults
    var defaults = {
       width      : "100px"
      ,height     : "100px"
      ,style      : "" 
      ,scrolling  : "no"
      ,frameborder: 0 
      ,name       : "" 
      ,onReady    : function(body){}
      // ,sandbox: "allow-same-origin" 
      ,seamless   : "seamless" 
      ,srcdoc     : "" 
    };


    //merge dafaults/settings
    var opts = options ? $.extend(defaults, options) : defaults;

    //Internet Explorer don't use addEventListener
    var addEvent = function(evt, elem, func) {
      if (elem.addEventListener) {  // W3C DOM
        elem.addEventListener(evt,function(){
        },true);
      } else if (elem.attachEvent) { // IE DOM
        elem.attachEvent("on"+evt, func);
      } else { // The rest 
        elem[evt] = func;
      }
    }

    //create new iframe
    var $iframe = document.createElement('iframe');
        $iframe.id = $this.attr("id")+"_innerframe_iframe";
        for (option in opts) {
          $iframe.setAttribute(option, opts[option]);
        }
        window.setTimeout(function(){
          Private._onReadyIframe();
        },1);

    var Private = {

      _contentWindow: function() {
        if ($iframe.contentWindow.document) {
          return $iframe.contentWindow;  
        } else {
          return document.frames[$iframe.id];
        }
      },

      _write: function(str){
        var content = Private._contentWindow()
        var doc = content.document;
        content[$iframe.id + "_im_ready"] = function(){
          Private._onReadyInnerIframe($('body',doc))
        }
        doc.write('<html><head></head><body>' + str + '</body></html>'
          + '<script id="innerframe_interval">function innerframe_interval() {if (typeof '
          + $iframe.id + '_im_ready == "function") {'
          + 'document.getElementsByTagName("body")[0].removeChild(document.getElementById("innerframe_interval"));'
          + $iframe.id + '_im_ready();'
          +'} else {innerframe_interval()}};innerframe_interval();</script>')
        $($iframe).attr("style", opts.style)
      },

      _onReadyIframe: function(){
        Private._write(string);
      },

      _onReadyInnerIframe: function(body){
        Private._contentWindow().stop();
        opts.onReady(body);
      }
    };
 
    this.each(function() {
      $this.append($iframe);
    });

    //returns jquery functions
    return this;
  };

})( jQuery );

