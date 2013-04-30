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
      ,frameBorder: "0" 
      ,name       : "" 
      ,onReady    : function(body){}
      // ,sandbox: "allow-same-origin" 
      ,seamless   : "seamless" 
      ,srcdoc     : "" 
    };

    //merge dafaults/settings
    var opts = options ? $.extend(defaults, options) : defaults;
    
    //create new iframe
    var $iframe = document.createElement('iframe');
        $iframe.id = ("innerframe_"+new Date().getTime()+Math.random()).replace(".","_");
        for (option in opts) {
          if (typeof opts[option] != 'function') {
            $iframe.setAttribute(option, opts[option]);
          }
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
        var doc = Private._contentWindow().document;
        window[$iframe.id+'_im_ready'] = function(_iframeWindow) {
          $doc = $('body', _iframeWindow.document);
          $doc.find("#innerframe_interval").remove();
          Private._onReadyInnerIframe($doc);
        };
        doc.write('<html><head></head><body style="margin:0;padding:0;">' + str + '</body></html>'
          + '<script id="innerframe_interval">'
            + 'window.__onloadIframe'+ $iframe.id +' = window.setInterval(function(){'
              + 'if (typeof document.getElementsByTagName("body")[0] != \'undefined\'){'
                + 'clearInterval(window.__onloadIframe'+ $iframe.id +');'
                + 'window.parent.'+ $iframe.id +'_im_ready(window);'
                + 'if (typeof window.stop != \'undefined\') {'
                   + 'window.stop();'
                + '}'
              + '}'
            +'}, 1);'
          + '</script>')
        $($iframe).attr("style", opts.style)
      },

      _onReadyIframe: function(){
        Private._write(string);
      },

      _onReadyInnerIframe: function(body){
        body.find("[src]:not(script)").each(function(){
          var src = $(this).attr("src");
          var timestamp = new Date().getTime();
          src = src + (((!!src.match(/\?/ig))?"&":"?")+"innerframe_nocache="+timestamp);
          $(this).attr("src",src)
        })
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
