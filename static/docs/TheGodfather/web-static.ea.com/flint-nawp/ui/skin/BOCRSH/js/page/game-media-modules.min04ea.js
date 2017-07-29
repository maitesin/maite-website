
(function($)
{var userHTML;if(typeof(login)!=='undefined'&&login===true)
{userHTML='<li id="gus-user" class="odd item-1 first"><a href="#"><span class="avatar"><img src="'+user.avatar+'" alt="" /></span><span class="username">'+user.name+'</span></a></li><li class="even item-2"><a href="#"><span>Logout</span></a></li>';}
else
{userHTML='<li class="odd item-1 first"><a href="#"><span>Register</span></a></li><li class="even item-2"><a href="#"><span>Login</span></a></li>';}
$('#gus-menu-2 > ul').prepend(userHTML);var cartHTML=[];if(typeof(cartTotal)!=='undefined'&&cartTotal>0)
{for(var i=0,ilen=cart.length;i<ilen;i++)
{cartHTML[cartHTML.length]='<tr><td class="col-1"><img src="'+cart[i].thumb+'"/></td><td class="col-2"><h5>'+cart[i].title+'</h5><span class="platform"><span class="label">Platform:</span> '+cart[i].platform+'</span></td><td class="col-3">$'+cart[i].price+'</td><td class="col-4"><input type="text" name="item" value="'+cart[i].quantity+'"/></td><td class="col-5"><a class="btn btn-2-close" href="#"><span>Delete</span></a></td></tr>';}}
else
{cartTotal=0;cartHTML[cartHTML.length]='<tr><td class="col-1 no-item" colspan="4">You have no items in your cart</td></tr>';}
$('#gus-cart .cart-total').text(cartTotal);$('#cart table tbody').prepend(cartHTML.join(''));var $gusNav=$('#gus-links > a, #gus-countries > a, #gus-cart > a').click(onGusNavClick);$('#gus-countries .sub-nav h6 a.btn, #gus-cart .sub-nav h6 a.btn').click(onCloseButtonClick);$(document).mousedown(onDocumentMouseDown);function onGusNavClick(e)
{e.preventDefault();var $this=$(this);var $gusLi=$this.parent();$gusNav.not($this).parent().removeClass('current');$gusLi.toggleClass('current');}
function onDocumentMouseDown(e)
{var $gusLi=$gusNav.parent();if($gusLi.has(e.target).length<=0)
{$gusLi.removeClass('current');}}
function onCloseButtonClick(e)
{e.preventDefault();$(this).closest('li.current').removeClass('current');}})(jQuery);(function($,window,undefined){var $container=$('#mod-countdown');var href=$.trim($container.find('.mod-header > .complete > a:first').attr('href'));if(href.length>0)
{$container.click(function(evt)
{evt.preventDefault();window.location.href=href;});}
var minute=60*1000;var minutesPerHour=60;var minutesPerDay=24*60;var days=Number($container.find('.days > ul > li > span').text().replace(/\D/,'')||0);var hours=Number($container.find('.hours > ul > li > span').text().replace(/\D/,'')||0);var minutes=Number($container.find('.minutes > ul > li > span').text().replace(/\D/,'')||0);var totalMinutes=parseInt(minutes+(hours*minutesPerHour)+(days*minutesPerDay));$container.bind('countdownTick',function(evt,data)
{var days=data.days.toString();while(days.length<3){days='0'+days;}
days=days.split('');var hours=data.hours.toString();while(hours.length<2){hours='0'+hours;}
hours=hours.split('');var minutes=data.minutes.toString();while(minutes.length<2){minutes='0'+minutes;}
minutes=minutes.split('');$(this).find('.days > ul > li').each(function(idx)
{var day=days[idx];var $day=$(this);$day.attr('title',day).find('span').text(day);$day[0].className=$day[0].className.replace(/\s?n\-\n{1}/g,'');$day.addClass('n-'+day);});$(this).find('.hours > ul > li').each(function(idx)
{var hour=hours[idx];var $hour=$(this);$hour.attr('title',hour).find('span').text(hour);$hour[0].className=$hour[0].className.replace(/\s?n\-\n{1}/g,'');$hour.addClass('n-'+hour);});$(this).find('.minutes > ul > li').each(function(idx)
{var minute=minutes[idx];var $minute=$(this);$minute.attr('title',minute).find('span').text(minute);$minute[0].className=$minute[0].className.replace(/\s?n\-\n{1}/g,'');$minute.addClass('n-'+minute);});}).bind('countdownComplete',function(evt)
{if(!$('#mod-countdown .complete > a span').is(':empty')){$('#mod-countdown > .mod-header > h3,#mod-countdown > .mod-content').hide();$('#mod-countdown .complete').show();}});function tick(days,hours,minutes,totalMinutes,minute,minutesPerHour,minutesPerDay)
{var oldDays=days;var oldHours=hours;var oldMinutes=minutes;totalMinutes--;var remainder;days=Math.floor(totalMinutes/minutesPerDay);remainder=Math.floor(totalMinutes-(days*minutesPerDay));hours=Math.floor(remainder/minutesPerHour);remainder=Math.floor(remainder-(hours*minutesPerHour))
minutes=remainder;$.event.trigger('countdownTick',[{days:days,hours:hours,minutes:minutes,totalMinutes:totalMinutes,oldDays:oldDays,oldHours:oldHours,oldMinutes:oldMinutes}]);if(totalMinutes<=0){$.event.trigger('countdownComplete');return;}
window.setTimeout(function(){tick(days,hours,minutes,totalMinutes,minute,minutesPerHour,minutesPerDay);},minute);}
if(totalMinutes>0){window.setTimeout(function(){tick(days,hours,minutes,totalMinutes,minute,minutesPerHour,minutesPerDay);},minute);}else{$.event.trigger('countdownComplete');}})(jQuery,this);;(function($,window,undefined){function onEPClick(evt)
{var href=$(this).data('href');if(href&&href.length!==0)
{window.location.href=href;}}
$('#mod-editorial-pod > .mod-content > .carousel li img').each(function(idx)
{var $this=$(this);var href=$.trim($this.siblings('a.btn').attr('href'));if(href&&href.length===0){return true;}
$this.data('href',href);}).live('click',onEPClick);$('#mod-editorial-pod > .mod-content > .carousel li img').videoOverlay();})(jQuery,this);(function($,window,undefined){$(document).ready(function(){$('#mod-footer .mod-content .footer-links .links:last-child').css('border-right','0 none');var div_dev_logo=$('<div></div>').addClass('mod developer-logo');var lnk_dev_logo=$('<a></a>').attr('href','http://www.criteriongames.com/').attr('target','_blank');var img_dev_logo=$('<img />').attr('src',EA.staticPath+EA.skinPath+'img/logo_criterion.png').attr('width',175).attr('height',49).attr('alt','EA');$('.row-5 .col-1').append(div_dev_logo.append(lnk_dev_logo.append(img_dev_logo)));});})(jQuery,this);;(function($,window,undefined){if($.browser.msie)
{var $gusSubnav=$('#mod-gus .gus-items li .sub-nav');$gusSubnav.each(function(i)
{$(this).append('<div class="hk1" style="width:'+$(this).outerWidth()+'px;"><span></span></div>');});}})(jQuery,this);;(function($,window,undefined){$('#mod-menu li.has-sub-nav .sub-nav li a').append('<div class="hk1"></div><div class="hk2"></div><div class="hk3"></div><div class="hk4"></div>');})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){$(document).ready(function()
{var url=window.location.href.toLowerCase();if(url.indexOf("ep=marquee")>0){$('#mod-editorial-pod > .mod-content > .carousel').marquee();}else{$('#mod-editorial-pod > .mod-content > .carousel').carousel({step:1,visible:1,loop:true,effect:'fade',pagination:true,autoSlide:true});}});})(jQuery,this);;(function($,window,undefined){$('#tabs-media-listing').tabs({cache:true,spinner:''});})(jQuery,this);;(function($,window,undefined){$('#tabs-media-listing').tabs({cache:true,spinner:''});$(window).load(function(evt)
{$('#mod-media-recently .scroll-container').scrollify({scrollHandleMinHeight:10});});})(jQuery,this);