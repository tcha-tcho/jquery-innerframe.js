/**
 * Jquery dwrite
 * 
 * JQuery plugin for creating effects known as the "zoetrope" 
 *
 * @author   Bruno Thiago Leite Agutoli <brunotla1@gmail.com>
 * @version  Release: 0.0.1-alpha
 * @license  http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 */
(function( $ ) {

  $.fn.dwrite = function(string, options) {

    //var selector
    var $this = $(this);

    //defaults
    var defaults = {
    };

    //merge dafaults/settings
    var opts = options ? $.extend(defaults, options) : defaults;

    //create new iframe
    var $iframe = document.createElement('iframe');
        $iframe.onload = function(){
          Private._onReadyIframe();
        };

    var Private = {

      _write: function(str){
        var doc = $iframe.contentWindow.document;
        doc.write('<html><head></head><body>'+ str+ '</body></html>');
        if (str.indexOf('<script') != -1 || str.indexOf('src="') != -1) {
          $('body', doc)[0].addEventListener("load", Private._onReadyInnerIframe, true);
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
        $iframe.contentWindow.stop();
      },
    };
 
    //call start function
    this.each(function() {
      //call function start
      $this.append($iframe);
    });

    //returns public functions
    return this;
  };

})( jQuery );

