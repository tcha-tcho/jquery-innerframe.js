/**
 * Jquery innerframe
 *
 * @author       Bruno Thiago Leite Agutoli <brunotla1@gmail.com>
 * @collatorated Tcha-Tcho <tchatcho66@hotmail.com>
 * @version      Release: 0.0.1-alpha
 * @license      http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 */
(function( $ ) {

  $.fn.innerframe = function(string, options) {

    //var selector
    var $this = $(this);

    var rules = {
      //HAS_SCRIPT_TAG: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
      HAS_SCRIPT_TAG: /\<script/g
    };

    //defaults
    var defaults = {
       width      : "100px"
      ,height     : "100px"
      ,style      : {}
      ,scrolling  : "no"
      ,frameborder: 0 
      ,name       : "" 
      // ,sandbox: "allow-same-origin" 
      ,seamless   : "seamless" 
      ,srcdoc     : "" 
    };


    //merge dafaults/settings
    var opts = options ? $.extend(defaults, options) : defaults;

    //Internet Explorer don't use addEventListener
    var addEvent = function(evt, elem, func) {
      if (elem.addEventListener) {  // W3C DOM
        elem.addEventListener(evt,func,true);
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
        for (css in opts.style) {
          $iframe.style[css] = opts.style[css];
        }
        window.setTimeout(function(){
          Private._onReadyIframe();
        },1);
        $iframe.onload = function(){
          Private._onReadyIframe();
        };

    var Private = {

      _contentWindow: function() {
        if ($iframe.contentWindow.document) {
          return $iframe.contentWindow;  
        } else {
          return document.frames[$iframe.id];
        }
      },

      _write: function(str){
        var doc = Private._contentWindow().document;
        doc.write('<html><head></head><body>' + str + '</body></html>');
        if ( rules.HAS_SCRIPT_TAG.test(str) ) {
          addEvent("load", $('body', doc)[0], Private._onReadyInnerIframe);
        } else {
          $($('body', doc)[0]).ready(function(){
            Private._onReadyInnerIframe();
          });
        }
      },

      _onReadyIframe: function(){
        Private._write(string);
      },

      _onReadyInnerIframe: function(){
        Private._contentWindow().stop();
      }
    };
 
    this.each(function() {
      $this.append($iframe);
    });

    //returns jquery functions
    return this;
  };

})( jQuery );

