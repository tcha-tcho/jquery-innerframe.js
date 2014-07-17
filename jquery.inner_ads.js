(function ( $ ) {

  if (!$.fn.innerframe) {
    console.log("This code depends on innerframe")
    return false;
  }
 
  $.fn.inner_ad = function( options ) {
 
    var settings = $.extend({
      sizes: {
         "Arroba1"       : [300,250]
        ,"Arroba2"       : [300,250]
        ,"Arroba3"       : [300,250]
        ,"Right1"        : [300,250]
        ,"Right2"        : [300,250]
        ,"Right3"        : [300,250]
        ,"Superbanner"   : [728, 90]
        ,"Take_over"     : [972, 60]
        ,"x01"           : [300,500]
        ,"x02"           : [300,750]
        ,"x03"           : [624,250]
        ,"x04"           : [624,500]
        ,"x05"           : [948,250]
        ,"x06"           : [300, 90]
        ,"x07"           : [620, 90]
        ,"Top"           : [728, 90]
        ,"Top1"          : [728, 90]
        ,"Top2"          : [728, 90]
        ,"Frame1"        : [300,250]
        ,"Frame2"        : [300,250]
        ,"Middle"        : [282,203]
        ,"mais-lidas"    : [322,248]
        ,"globoshopping" : [948,372]
        ,"assineglobo"   : [948,350]
        ,"default"       : [282,203]
      }
      ,onReady: function(body){}
    }, options );

    function generate_publicidade(_this) {
      if (!OAS_url) {
        console.log("This code depends on OAS system");
        return false;
      };
      var position = _this.attr("id");
      var width  = settings.sizes[position][0];
      var height = settings.sizes[position][1];
      var sitepage = (settings.sitePage || OAS_sitepage);

      var OAS_print_glb = "function OAS_PrintGLB(){"
      + "document.write('<script type=\\\"text/javascript\\\" language=\\\"javascript\\\" SRC=\\\""+OAS_url+"adstream_mjx.ads/"+sitepage+"/1"+OAS_rns+"@"+OAS_listpos+"?"+OAS_query+"\\\"><\\\/script>');"
      +"};";

      OAS_rn=new String(Math.random()); 
      OAS_rns=OAS_rn.substring(2,11); 
      var scripts = "";
      scripts+= '<script type="text/javascript" language="javascript">';
      // scripts+= OAS_RICH.toString()+";"; 
      scripts+= "var OAS_RICH = function(pos){};"; 
      scripts+= "var OAS_sitepage='"+sitepage+"';"; 
      scripts+= "var OAS_version="+OAS_version+";"; 
      scripts+= "var OAS_url='"+OAS_url+"';"; 
      scripts+= "var OAS_listpos='"+OAS_listpos+"';"; 
      scripts+= "if(typeof OAS_listposLayout!='undefined'){OAS_listpos=OAS_listposLayout};"; 
      scripts+= "var OAS_query='"+window.location.pathname+"';";
      scripts+= "var OAS_target='"+OAS_target+"';"; 
      scripts+= "var OAS_rn="+OAS_rn+";"; 
      scripts+= "var OAS_rns="+OAS_rns+";"; 
      // scripts+= "var OAS_rn=new String(Math.random());"; 
      // scripts+= "var OAS_rns=OAS_rn.substring(2,11);"; 
      scripts+= OAS_NORMAL.toString()+";"; 
      scripts+= OAS_AD.toString()+";"; 
      scripts+= "var oas_print_flag=0;"; 
      scripts+= OAS_print_glb;
      scripts+= '</script>';
      scripts+= '<script type="text/javascript" language="javascript">OAS_PrintGLB();</script><script type="text/javascript" language="javascript">OAS_AD( "'+position+'" );</script>';


      return _this.innerframe(scripts,{width:width,height:height,style:"width:"+width+"px;height:"+height+"px;",onReady:function(body){
        settings.onReady(body);
      }});
    }

    return generate_publicidade(this);
  };
 
}( jQuery ));





$(document).ready(function(){
  // jaobi.on("ready",function(){
    // jaobi.getThemes(function(themes){
      // var site_page = sitepages[themes[0]]
      var site_page = "edepoca/edepoca/home"
      jQuery(".inner_ad").each(function(){
        var _this = jQuery(this);
        _this.inner_ad({sitePage: site_page, onReady: function(body){
          var href = body.find("a").attr("href");
          if (href && href.match(/(\/empty.gif\/)/ig)) {
            _this.hide();
          };
        }});
      });
    // })
  // })
});















