(function($,window,undefined){var $mod=$('#mod-filter-hero');if($mod.length!==1)return;if($(".content > h1 + h3",$mod).length){$(".content > h1",$mod).css("font-size","50px");$(".content > h1",$mod).css("letter-spacing","1px");if(!$(".content > h3 + p",$mod).length){var btnOffset=$(".content a.btn",$mod).offset().top,height_variance=($(".content",$mod).outerHeight()-$(".content a.btn",$mod).height())/2;height_variance=((btnOffset-$mod.offset().top)/2)-height_variance;$(".content > h3",$mod).css("margin-bottom",height_variance)}}})(jQuery,this);(function($,window,undefined){function adjustModHeights(){var debug=false,resize_animation_speed=500;$("#content > .row.multi").each(function(){$row=$(this);if(debug)window.log("### FOUND ROW: "+$row.attr('class')+" ###");var tallest_height=null,max_height=null,height_differance=null;$row.find(".col > .mod").each(function(){$mod=$(this);var this_max_height=($mod.css('max-height')!='none')?$mod.css('max-height').replace('px',''):max_height,this_height=$mod.outerHeight();max_height=(this_max_height&&this_max_height>max_height)?this_max_height:max_height;height_differance=(tallest_height&&tallest_height!=this_height)?true:height_differance;tallest_height=(this_height>tallest_height)?this_height:tallest_height});if(debug)window.log("### height_differance: "+height_differance+"");if(debug)window.log("### tallest_height: "+tallest_height+"");if(debug)window.log("### max_height: "+max_height+"");if(height_differance){var height=max_height?max_height:tallest_height;$row.find(".col > .mod").each(function(){$mod=$(this);var new_height=(height!=$mod.outerHeight())?height:null;if(debug)window.log("### NEW HEIGHT: "+new_height);var new_height=new_height?height-($mod.outerHeight()-$mod.height()):new_height;if(debug)window.log("### NEW HEIGHT: "+new_height);if(new_height){$mod.animate({height:new_height},resize_animation_speed,"swing");if(debug)window.log("### MOD "+$mod.attr('class')+" HEIGHT SET TO: "+new_height+"")}else if(debug)window.log("### MOD "+$mod.attr('class')+" HEIGHT NOT SET")});if(debug)window.log("### HEIGHTS WERE SET ###");if(debug)window.log("### ALL HEIGHTS SET TO : "+height+"")}else if(debug)window.log("### HEIGHTS NOT SET ###")})};$("#content").bind('adjustModHeights',adjustModHeights)})(jQuery,this);(function($,window,undefined){$('.mod-ns-site-menu').each(function(){var $mod=$(this);if($mod.length===0)return;if($.browser.msie&&(parseInt($.browser.version)===7||parseInt($.browser.version)===8))$mod.find('> .mod-content > ul > li.has-sub > .sub').prepend('<i class="hk-shadow"></i><i class="hk-bg2"></i>');$mod.parent().parent().parent().css("z-index",101)})})(jQuery,this);(function($,window,undefined){$('.mod-ns-anchor-menu').each(function(){window.log("### mod-ns-anchor-menu ###");var $mod=$(this),$header=$mod.find(".mod-header"),$prev=$header.find('a.scroll-prev'),$next=$header.find('a.scroll-next'),$ul=$mod.find(".mod-content > ul"),$li=$ul.find("li"),isAnimating=false,isKeyScrolling=false,onKeyDownTimeOut=false,isScrollingTimeOut=false,index=1,max=$li.length,modOffsetTop=$mod.offset().top,headerPositionTop=$header.position().top,headerOffsetTop=$header.offset().top,minTop=(modOffsetTop+headerPositionTop),maxTop=($($ul.find("li:last a").attr("href")).offset().top+headerPositionTop);$prev.live('click',function(evt){window.log("### $prev.click() ###");evt.preventDefault();previous()});$next.live('click',function(evt){window.log("### $next.click() ###");evt.preventDefault();next()});$li.find("a").live('click',function(evt){window.log("### $li a.click() ###");evt.preventDefault();index=$(this).parent().index();$li.removeClass("stick");$(this).parent().addClass("stick");next()})
function previous(){window.log("### previous() ###");if(isAnimating)return;if(index===1)return;closeTooltip();scrollTo((index-1))}
function next(){window.log("### next() ###");if(isAnimating)return;closeTooltip();if(index+1<=max)scrollTo((index+1))}
function scrollTo(idx){window.log("### scrollTo("+idx+") ###");if(isAnimating)return;if(idx){if(idx===index)return;index=idx};isAnimating=true;var ofId=$ul.find("li:eq("+(index-1)+") > a").attr("href");if(idx>1){$('#scroll-anchor').position({my:'left top',at:'left top',offset:'0 -20',collision:'none',of:ofId});$('html,body').animate({scrollTop:$('#scroll-anchor').position().top},100,onScrollComplete)}else $('html,body').animate({scrollTop:0},100,onScrollComplete)}
function onScrollComplete(evt){window.log("### onScrollComplete() ###");window.setTimeout(onDelayedScrollComplete,150)}
function onDelayedScrollComplete(evt){isAnimating=false;window.log("### onDelayedScrollComplete() ###");var ofId=$ul.find("li:eq("+(index-1)+") > a").attr("href"),ulOffest=(index===1)?0:40,targetTop=$(ofId).offset().top-400,contentHeight=$(ofId).parent().parent().height(),ulHeight=$ul.height();if($(window).height()<$ul.height()){window.log("### $ul is to Tall! ###");isAnimating=true;$ul.animate({top:0},100,function(){isAnimating=false})}else if(targetTop>contentHeight-ulHeight){window.log("### $ul will go past the content ###");ulTop=contentHeight-ulHeight;isAnimating=true;$ul.animate({top:ulTop},100,function(){isAnimating=false})}else{window.log("### $ul is good to move! ###");$ul.position({my:'left top',at:'left top',offset:'723 '+ulOffest,collision:'none',of:ofId,using:function(to){$(this).animate(to,250)}})};$header.position({my:'left top',at:'left top',offset:'-40 40',collision:'none',of:ofId,using:function(to){$(this).animate(to,250)}});updateNavigtion()}
function updateNavigtion(){if(index>1){var href=$ul.find("li:eq("+(index-2)+") > a").attr("href");$prev.attr('href',href).removeClass('disabled').removeAttr('disabled')}else $prev.attr('href','#').addClass('disabled').attr('disabled','disabled');if(index<max){var href=$ul.find("li:eq("+(index)+") > a").attr("href");$next.attr('href',href).removeClass('disabled').removeAttr('disabled')}else $next.attr('href','#').addClass('disabled').attr('disabled','disabled');$li.removeClass("stick");$ul.find("li:eq("+(index-1)+")").addClass("stick")}
function onScroll(evt){if(isScrollingTimeOut)clearTimeout(isScrollingTimeOut);if(isAnimating||isKeyScrolling)return;isScrollingTimeOut=setTimeout(function(){positionNavigation()},500)}
function getPageScrollTop(){var htmlScrollTop=$('html').scrollTop(),bodyScrollTop=$(document.body).scrollTop();return((bodyScrollTop>htmlScrollTop)?bodyScrollTop:htmlScrollTop)}
function positionNavigation(){if(isAnimating)return;var scrollTop=getPageScrollTop(),headerTop,ulTop;if(scrollTop<=minTop){headerTop=headerPositionTop;ulTop=headerPositionTop-40}else if(scrollTop>=maxTop){headerTop=scrollTop-modOffsetTop;ulTop=scrollTop-modOffsetTop}else{headerTop=scrollTop-modOffsetTop;ulTop=scrollTop-modOffsetTop};$header.animate({top:headerTop},100);var ulBottom=ulTop+$ul.height(),contentHeight=$($ul.find("li:first > a").attr("href")).parent().parent().height();if(ulBottom>contentHeight)ulTop=contentHeight-$ul.height();if($(window).height()<$ul.height())ulTop=0;isAnimating=true;$ul.animate({top:ulTop},100,function(){for(idx=1;idx<=max;idx++){var ofId=$ul.find("li:eq("+(idx-1)+") > a").attr("href");if($header.offset().top>=$(ofId).offset().top)index=idx};updateNavigtion();isAnimating=false})}
function onKeyDown(evt){window.log("### isKeyScrolling: "+isKeyScrolling+" ###");if(onKeyDownTimeOut)clearTimeout(onKeyDownTimeOut);onKeyDownTimeOut=setTimeout(function(){isKeyScrolling=false},600);switch(evt.which){case (74):{isKeyScrolling=true;closeTooltip();previous();break};case (75):{isKeyScrolling=true;closeTooltip();next();break}}}
function closeTooltip(evt){$.cookie('ea_cookiemonster','1');$header.tooltip('close').tooltip('_destroy')};if($.cookie('ea_cookiemonster')!=='1')$header.attr({type:'ready',title:' '}).tooltip({type:'none',appendTo:$('#content')[0],content:function(){return $header.find(".tooltip").html()},position:{my:'center bottom',at:'center top',offset:'8 -50',collision:'fit'}}).tooltip('open');$('.ui-tooltip').addClass('instructions').find(' > .ui-tooltip-content > span').click(closeTooltip);$(window).scroll(onScroll);$((!($.browser.msie&&(parseInt($.browser.version)===7||parseInt($.browser.version)===8)))?window:document).keydown(onKeyDown);updateNavigtion();$(document.body).append('<span id="scroll-anchor"></span>');$("#content .back-to-top").live('click',function(evt){evt.preventDefault();$('html,body').animate({scrollTop:0},500)})})})(jQuery,this);(function($,window,undefined){$('.mod-ns-blog').each(function(){var $mod=$(this);if($.browser.msie)if(parseInt($.browser.version)===7||parseInt($.browser.version)===8){$mod.find("> .mod-content > ul > li").prepend('<i class="hk-shadow"></i><i class="hk-bg"></i>');$mod.find("> .mod-content > ul > li").append('<i class="hk-clear"></i>')}})})(jQuery,this);(function($,window,undefined){$('.mod-ns-breadcrumb-menu').each(function(){var $mod=$(this);if($mod.length===0)return;$mod.find(".mod-content").live('mouseover',function(){$("#header").css("z-index",1000)});$mod.find(".mod-content").live('mouseout',function(){$("#header").css("z-index",100)})})})(jQuery,this)