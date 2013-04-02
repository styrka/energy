webpackJsonp(28,{28:function(a,b,c){a.exports={components:[{name:"transform",title:"Translate, Scale & Rotate",description:"This component handles the transformations. It handles the basic attributes like data-x, data-rotate or data-scale-y."},{name:"active",title:"Active Class",description:"This component handles the toggling of activeClass and nestedActiveClass."},{name:"circular",title:"Circular Stepping",description:"This component handles the natural flow of the steps, taken from the dom order. It is based on the Near component. It also handles the data-exclude attribute."},{name:"start",title:"Starting Step",description:"This component handles the config option start."},{name:"ways",title:"Ways: Routing",description:"This component handles the data-next and data-prev attributes and the route command."},{name:"ajax",title:"Ajax Load Steps",description:'This component enables you to load step via ajax. It handles the data-src and href attribute and offers the "afterStepLoaded" event.'},{name:"hash",title:"Hash in URL",description:"This component handles updates to and change events from the url hash. It also handles clicks on link to other steps."},{name:"keyboard",title:"Keyboard",description:"This component handles navigation with the keyboard. It also offers a binding mechanism for other components, plugins and the user."},{name:"viewport",title:"Viewport",description:"This component handles camera zooming to window size and zooming in zoomable steps.",dependencies:["keyboard"]},{name:"mouse",title:"Mouse",description:"This component handles click on other steps."},{name:"mobile",title:"Mobile",description:"This component handles swiping on mobile devices."},{name:"templates",title:"Templates",description:"This component handles templates. It handles the data-template attribute and registers the template."},{name:"jqevents",title:"jQuery events",description:"This component fires the jQuery events enterStep and leaveStep."},{name:"animation",title:"Animation",description:"Apply custom animations to steps. Handles the attribute data-jmpress (the attribute name depends on a config option)."},{name:"toggle",title:"Toggle",description:"Bind a key to toggle the de/initialization of jmpress.js.",plugin:!0},{name:"secondary",title:"Secondary",description:"For automatically changing steps after a given duration. Makes the attributes data-duration and data-duration-action available.",plugin:!0},{name:"duration",title:"Duration",description:"Switches the step automatically after a while.",plugin:!0},{name:"presentation-mode",title:"Presentation Mode",description:"Enables Presentation Mode.",plugin:!0}],settings:[{name:"default",btn:"success",title:"Default",components:["transform","active","circular","ways","hash","keyboard","viewport","mouse","mobile","templates","jqevents","animation"]},{name:"presentation",btn:"success",title:"Presentation",components:["transform","active","circular","ways","hash","keyboard","viewport","mouse","mobile","templates","animation","toggle","duration","presentation-mode"]},{name:"impress",btn:"info",title:"Impress.js",components:["transform","active","circular","hash","keyboard","mouse"]},{name:"all",btn:"danger",title:"All",components:["transform","active","circular","start","ways","ajax","hash","keyboard","viewport","mouse","mobile","templates","jqevents","animation"]},{name:"all-plugins",btn:"danger",title:"All + Plugins",components:["transform","active","circular","start","ways","ajax","hash","keyboard","viewport","mouse","mobile","templates","jqevents","animation","toggle","secondary","duration","presentation-mode"]}]}},34:function(a,b,c){var d=c(3),e=c(28);a.exports=function(a){function b(b){e.components.forEach(function(b){a.find("#component-"+b.name).attr("checked",!1)}),b.components.forEach(function(b){a.find("#component-"+b).attr("checked",!0)})}function f(){a.find("#dataurl").addClass("disabled"),a.find("#dataurl").attr("href",""),g(!1,function(b){a.find("#dataurl").removeClass("disabled"),a.find("#dataurl").attr("href",b)})}function g(b,d){return c.e(29,function(c){function f(){var b=c(33),d={};return e.components.forEach(function(b){d[b.name]=a.find("#component-"+b.name).attr("checked")}),b(d)}if(b){c.e(27,function(a){var b=a(62);b.create("downloadify",{filename:function(){return"jmpress.js"},data:function(){return f()},swf:a(92),width:78,height:28,transparent:!0,downloadImage:a(91)})});return}var g=f();if(d){var h=c(32),i="data:text/javascript;headers=Content-Disposition%3A%20attachment%3B%20jmpress.js%22%0D%0AContent-Language%3A%20en;charset=utf-8;base64,"+h(g);d(i)}return g})}document.title="jmpress.js builder",a.html(c(94)()),e.components.forEach(function(b){d("<div>").addClass("control-group").html(c(93)(b)).insertBefore(a.find("#form-actions"))}),a.find("input").change(f),e.settings.forEach(function(e){d("<p>").html(c(95)(e)).appendTo(a.find("#settings")).click(function(){b(e),f()})}),b(e.settings[0]),f(),g(!0)}},93:function(module,exports,require){var jade=require(1);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push("<label"),buf.push(attrs({"for":"component-"+name,"class":"control-label"},{"for":!0})),buf.push(">"),locals.plugin&&buf.push('<span class="label label-info">Plugin</span>'),buf.push("<b>");var __val__=" "+title;buf.push(escape(null==__val__?"":__val__)),buf.push('</b></label><div class="controls"><label class="checkbox"><input'),buf.push(attrs({id:"component-"+name,type:"checkbox"},{id:!0,type:!0})),buf.push("/><span>");var __val__=description;buf.push(escape(null==__val__?"":__val__)),buf.push("</span></label></div>")}return buf.join("")}},94:function(module,exports,require){var jade=require(1);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div class="container-fluid"><div class="row-fluid"><div class="span12"><div class="page-header"><h1>jmpress.js<small> custom downloader</small></h1></div></div></div><div class="row-fluid"><div class="span8"><p>Build your own version of<b> jmpress.js</b><b>&nbsp;</b><b>');var __val__=require(7).version;buf.push(escape(null==__val__?"":__val__)),buf.push('</b></p><p><em>Select the components and plugins you need for your\n project and click on "Download" to save it.</em></p><form id="choose-form" class="form-horizontal"><fieldset><div id="form-actions" class="form-actions"><div id="downloadify"></div><a id="dataurl" download="jmpress.js" class="btn btn-primary">Download (Data Url)</a></div></fieldset></form></div><div class="span4"><h2>Common builds</h2><div id="settings"></div></div></div></div>')}return buf.join("")}},95:function(module,exports,require){var jade=require(1);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push("<button"),buf.push(attrs({id:"setting-"+name,"class":"btn btn-"+btn},{id:!0,"class":!0})),buf.push(">");var __val__=title;buf.push(escape(null==__val__?"":__val__)),buf.push("</button>")}return buf.join("")}}})