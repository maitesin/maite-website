
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
$this.data('href',href);}).live('click',onEPClick);$('#mod-editorial-pod > .mod-content > .carousel li img').videoOverlay();})(jQuery,this);(function($,window,undefined){if(!EA.newsletter){return;}
if(EA.newsletter.newsletterUrl&&EA.newsletter.newsletterUrl.length>0){$.ajax({url:EA.newsletter.newsletterUrl,success:initNewsletter});}
function initNewsletter(data){if(data){var settings=null;if($("#formNewsletter").data&&$("#formNewsletter").data('group')&&$("#formNewsletter").data('group').settings){settings=$("#formNewsletter").data('group').settings;}
$("#mod-newsletter").replaceWith(data);if(settings){$("#formNewsletter").validation(settings);}}}})(jQuery,this);(function($,window,undefined){if(!EA.comments){return;}
var isAjax;if(EA.comments.commentsUrl&&EA.comments.commentsUrl.length>0){isAjax=true;$.ajax({url:EA.comments.commentsUrl,data:({commentPermalink:EA.comments.commentPermalink}),success:function(data){$("#mod-comments").replaceWith(data);setTimeout(initComments,500);}});}else{initComments();}
function initComments(){if(isLoggedIn()){if($.browser.webkit){$('#mod-comments .post-facebook-wall').remove();}
if($.browser.msie){$('#mod-comments .post-facebook-wall').remove();}
$('#mod-comments .form-add-comment').show();}else{$('#mod-comments .login-to-comment').show();}
var comments='';var commentsIds=[];var commentTimeout='';var page=1;var sort='mostPopular';var order='desc';var perPage=EA.comments.commentCap;var total=EA.comments.totalComments;var assetId=EA.comments.commentAssetId;var channel=EA.comments.commentChannel;var permalink=EA.comments.commentPermalink;var url=EA.comments.commentFetchUrl;var commentsCookie="c_status";var commentsStatusMap=new Array();var commentsStatus=getCommentsStatusConstants();var reportedAttr=3;var hiddenAttr=2;var voteAttr=1;var idAttr=0;var commentsGlue="_";var commentsAttrGlue=".";var $comments=$('#mod-comments .comments').eq(0);var lastCommentTime=null;$comments.bind('onCommentsContainerCommentUpdate',onCommentsContainerCommentUpdate);$('#mod-comments .comment-replies').live('click',onRepliesClick);$('#mod-comments .comments-pagination .show-more').live('click',showNext).bind('onCommentUpdate',onShowMoreCommentUpdate);$('#mod-comments .comments-pagination .page').bind('onCommentUpdate',onPageCommentUpdate);$('#mod-comments .show-comment').live('click',showHiddenComment);$('#mod-comments .reply-comment').live('click',reply);$('#mod-comments .btn-comment-add-another').live('click',onAddAnotherComment);$('#mod-comments .form-add-comment .btn-comment-add').live('click',addComment);$('#mod-comments .btn-1-dislike').live('click',thumbsDown);$('#mod-comments .btn-1-like').live('click',thumbsUp);$('#mod-comments .reportLink').live('click',reportComment);$('#mod-comments .comments .form-add-comment textarea').charCounter(EA.comments.maxChars,{delay:0,container:'#mod-comments .comments .form-add-comment .char-count em'});$('#mod-comments .add-comment .form-add-comment textarea').charCounter(EA.comments.maxChars,{delay:0,container:'#mod-comments .add-comment .form-add-comment .char-count em'});var $addComment=$comments.find('> .form-add-comment').detach();var $commentSuccess=$('.comment-success').detach();var $spamComment=$('.spam-comment').detach();var $emptyComment=$('.empty-comment').detach();var $frequentComment=$('#mod-comments .frequent-comment').detach();$emptyComment.find('.reply-comment').hide();if(isAjax){init();}else{$(window).load(init);}
function init(){if(EA.baseDropdown){$('#comments-sort').change(onSortSelectChange);}else{$('#comments-sort').selectmenu({width:118,menuWidth:136}).change(onSortSelectChange);}
initFacebookLink();initCommentsStatusMap();comments=$('div.comments > ol').html();$.event.trigger('onCommentsContainerCommentUpdate',{});$('#mod-comments .add-comment').append($addComment.detach());$addComment.find('textarea').val('').blur();}
function getComments(clear)
{if(clear===true)
{comments='';total=EA.comments.totalComments;}
else
{comments=$comments.children('ol:first').html();}
$comments.loading(true);$.ajax({url:url,data:({'sort':sort,'order':order,'page':page}),success:onGetCommentsSuccess});}
function onGetCommentsSuccess(data)
{$comments.loading(false);comments=comments.concat(data);if(comments.length>0)
{$('#mod-comments .form-comments-sort').show(200);}
var commentsHTML=getCommentsHTML(comments);$comments.html(commentsHTML);$.event.trigger('onCommentsContainerCommentUpdate',{comments:comments});}
function getCommentsHTML(comments)
{var commentsHTML=[];return getCommentGroupHTML(comments,commentsHTML).join('');}
function getCommentGroupHTML(comments,commentsHTML)
{commentsHTML[commentsHTML.length]='<ol>';commentsHTML[commentsHTML.length]=comments;commentsHTML[commentsHTML.length]='</ol>';return commentsHTML;}
function getNewCommentHTML(commentText)
{$newComment=$emptyComment.find('ol').eq(0).clone();$newComment.children('li').addClass('first');$newComment.find('div.comment').eq(0).attr('id','0');$newComment.find('.comment > .comment-body > .comment-text').html(commentText);return $newComment.html();}
function onRepliesClick(e)
{e.preventDefault();openCloseReplies($(this));}
function openCloseReplies($replyLink)
{if($replyLink.hasClass('open'))
{closeReplies($replyLink);}
else
{openReplies($replyLink);}}
function openReplies($replyLink)
{$replyLink.addClass('open').closest('.comment').siblings('ol').slideDown(100);}
function closeReplies($replyLink)
{$replyLink.removeClass('open').closest('.comment').siblings('ol').slideUp(100);}
function showHiddenComment(e)
{e.preventDefault();$(this).closest('.comment').removeClass('hidden');updateHiddenOnCookie($(this).closest('.comment')[0].id,commentsStatus.ignoreHidden);}
function reply(e)
{e.preventDefault();if(isLoggedIn())
{var $closestLi=$(this).closest('li');if($addComment.closest('li')[0]!=$closestLi[0])
{$closestLi.append($addComment.detach().hide());}
else
{$('#mod-comments .add-comment').append($addComment.detach());}
clearCommentSuccess(true);$spamComment.hide(200);$frequentComment.hide(200);clearCommentForm($addComment);$addComment.show(200);window.setTimeout(function()
{$('html,body').animate({scrollTop:$addComment.offset().top-150},250);},200);}
else
{askToLogin();}}
function onSortSelectChange(e)
{sortOption=$(this).find('option:selected').val();page=1;switch(sortOption){case'popular':sort='mostPopular';order='desc';break;case'oldest':sort='dateCreated';order='asc';break;case'newest':sort='dateCreated';order='desc';break;}
$.cookie('c_sort',sortOption,{expires:360,path:'/'});getComments(true);}
function onShowMoreCommentUpdate(e,data)
{var nextNum;var totalLeft=(data.total-data.currentTotal);if(totalLeft<=0)
{$(this).hide();return;}
if(totalLeft>perPage)
{nextNum=perPage;}
else
{nextNum=totalLeft;}
$(this).show().parent().show().end().find('em:first').text(nextNum);}
function showNext(e)
{e.preventDefault();page++;getComments();}
function onPageCommentUpdate(e,data)
{var commentsTotal=data.currentTotal;if(commentsTotal>0)
{$(this).parent().show().end().children('em:first').text('1-'+commentsTotal);$(this).parent().show().end().children('em:last').text(data.total);}}
function onCommentsContainerCommentUpdate(e,data)
{var previousComments=commentsIds;disableElementsFromCookie();commentsIds=$('div.comments > ol > li > div.comment').map(function(){return this.id;});duplicated=removeDuplicatedComments(previousComments,commentsIds);total-=duplicated;currentTotal=commentsIds.length-duplicated;if(total<currentTotal){total=currentTotal;EA.comments.totalComments=currentTotal;}
$.event.trigger('onCommentUpdate',{currentTotal:currentTotal,total:total});}
function addComment(e)
{e.preventDefault();var elapsedTime=(new Date().getTime()/1000)-lastCommentTime;var $form=$(this).closest('.form-add-comment');if(elapsedTime<EA.comments.freqLimit){$frequentComment.find('em').html(Math.ceil((EA.comments.freqLimit-elapsedTime)/60));$frequentComment.appendTo($form.parent()).hide();$frequentComment.find('.error-messages').show();$frequentComment.show(200);window.setTimeout(function()
{$('html,body').animate({scrollTop:$form.offset().top-100},250);},200);return false;}
var $rootComment=$form.siblings('.comment');var commentText=$form.find('textarea').val().replace(/</g,"&lt;").replace(/>/g,"&gt;");var commentSubject=$form.find('.input-subject').val();var commentId=$rootComment.length>0?$rootComment[0].id:'';var postToFacebook=$form.find('.post-facebook-wall .input-fb-wall').is(':checked');var params={};params.url=EA.comments.commentUrl;params.assetId=assetId;params.channel=channel;params.commentText=commentText;params.commentSubject=commentSubject;params.commentId=commentId;params.permalink=permalink;params.postToFacebook=postToFacebook;clearErrorMessages($form);if(commentText.replace(/\s/g,"")==''||commentText==$form.find('textarea').attr('placeholder')){showErrorMessage($form,EA.comments.commentRequiredMessage);return false;}
$commentSuccess.appendTo($form.parent()).hide();$form.hide(200);if(postToFacebook){if(window.EAFacebook!==undefined)
{EAFacebook.showPermissionToPublishStream(params,addCommentAjax);}}else{addCommentAjax(params);}
onAddComment(commentText,$rootComment);}
function addCommentAjax(params){$.ajax({url:params.url,data:({'assetId':params.assetId,'commentChannel':params.channel,'commentText':params.commentText,'commentSubject':params.commentSubject,'commentId':params.commentId,'commentPermalink':params.permalink,'postToFacebook':params.postToFacebook}),success:onAddCommentSuccess});}
function showErrorMessage(e,message){$errorMessages=e.find('.error-messages');$errorMessages.find('.error-message').html(message);$errorMessages.show(200);}
function clearErrorMessages(e){$errorMessages=e.find('.error-messages');$errorMessages.find('.error-message').html('');$errorMessages.hide(200);$frequentComment.hide(200);}
function onAddComment(commentText,$rootComment){newCommentHTML=getNewCommentHTML(commentText);if($rootComment.length>0){$list=$rootComment.eq(0).siblings('ol');if($list.length==0){addNewListOfReplies(newCommentHTML,$rootComment);}else{openReplies($rootComment.find('.comment-replies').eq(0));addCommentToList(newCommentHTML,$list);}}else{$list=$comments.children('ol');addCommentToList(newCommentHTML,$list);}
$commentSuccess.show(200);commentTimeout=setTimeout(onClearCommentTimeout,3000);}
function onAddCommentSuccess(data){data=$.parseJSON(data);$newComment=$comments.find("div.comment[id='0']");switch(data.status)
{case('success'):{$newComment.attr('id',data.id);$newComment.find('.comment-text').html(data.comment);$newComment.find('.reply-comment').show();$newComment.find('.btn-1-dislike').removeClass('disabled');$newComment.find('.btn-1-like').removeClass('disabled');$('#mod-comments .comments-pagination .page').find('em:first').text('1-'+$('div.comments > ol > li > div.comment').length);incrementRepliesCount($newComment);lastCommentTime=new Date().getTime()/1000;$('#mod-comments .form-comments-sort').addClass('has-comments');break;}
case('spam'):{clearCommentSuccess();$newComment.remove();$spamComment.hide().appendTo($addComment.parent()).show(200,function()
{$('html,body').animate({scrollTop:$spamComment.offset().top-100},250);});break;}
case('frequent'):{clearCommentSuccess();$newComment.remove();$frequentComment.find('em').html(data.remaining_time);$frequentComment.appendTo($addComment.parent()).show(200,function()
{$frequentComment.find('.error-messages').show();$('html,body').animate({scrollTop:$frequentComment.offset().top-100},250);});$addComment.show(200);break;}}}
function incrementRepliesCount($newComment){$parentList=$newComment.parent().parent();if($parentList.length>0&&$parentList.siblings('.comment').length>0){$replyCountEl=$parentList.siblings('.comment').eq(0).find('.reply-count');count=$replyCountEl.html();if(count!=null&&count!=''){if(parseInt(count)>1){$replyCountEl.html(parseInt(count)+1);}else{$replyCountEl.parent().html(EA.comments.multipleRepliesMessage.replace("?",parseInt(count)+1));}}else{$parentList.siblings('.comment').find('.comment-replies span').html(EA.comments.singleReplyMessage);$parentList.siblings('.comment').find('.comment-replies').addClass('open');}}else{total++;EA.comments.totalComments++;$parentList.parent().parent().find('.comments-pagination .page em:last').text(total);}}
function addNewListOfReplies(newCommentHTML,$rootComment){listHTML=getCommentGroupHTML(newCommentHTML,[]).join('');$rootComment.eq(0).after(listHTML);}
function addCommentToList(commentHTML,$list)
{$list.eq(0).children('li.first').removeClass('first');$list.eq(0).prepend(commentHTML);$('html,body').animate({scrollTop:$list.offset().top-100},250);}
function onAddAnotherComment(e){e.preventDefault();clearCommentSuccess();$spamComment.hide(200);$frequentComment.hide(200);var $form=$addComment;clearCommentForm($form);$form.show(200);}
function clearCommentSuccess(isReply){if(commentTimeout!=''){$commentSuccess.hide(200);if(!isReply){$('#mod-comments .add-comment').append($addComment.detach());}
clearTimeout(commentTimeout);commentTimeout='';}}
function clearCommentForm($form){$form.find('textarea').val('');$form.find('.input-fb-wall').attr('checked',false);}
function onClearCommentTimeout(){var $form=$addComment;clearCommentSuccess();clearCommentForm($form);$form.find('textarea').mouseout();$form.show(200);}
function thumbsUp(e)
{e.preventDefault();if(isLoggedIn()&&!$(this).hasClass('disabled'))
{var $comment=$(this).closest('.comment');var commentId=$comment[0].id;if(!isThumbedUp(commentId)){var voted=isThumbedDown(commentId)?1:0;$.ajax({url:EA.comments.commentUpUrl,data:({'commentId':commentId,'commentVoted':voted}),success:onThumbsCommentUpdate,error:function(jqXHR,textStatus){if(jqXHR.status==0||textStatus=='timeout'){alert('Error: Your request has timed out.');}else{alert('Error: Your vote was not posted. Please try again later.');}}});}
$(this).addClass('disabled');$(this).siblings('.btn-1-dislike').removeClass('disabled');$comment.removeClass('hidden');}
else
{if(!isLoggedIn()){askToLogin();}}}
function thumbsDown(e)
{e.preventDefault();if(isLoggedIn()&&!$(this).hasClass('disabled'))
{var $comment=$(this).closest('.comment');var commentId=$comment[0].id;if(!isThumbedDown(commentId)){var voted=isThumbedUp(commentId)?1:0;$.ajax({url:EA.comments.commentDownUrl,data:({'commentId':commentId,'commentVoted':voted}),success:onThumbsCommentUpdate,error:function(jqXHR,textStatus){if(jqXHR.status==0||textStatus=='timeout'){alert('Error: Your request has timed out.');}else{alert('Error: Your vote was not posted. Please try again later.');}}});}
$(this).addClass('disabled');$(this).siblings('.btn-1-like').removeClass('disabled');$comment.addClass('hidden');}
else
{if(!isLoggedIn()){askToLogin();}}}
function onThumbsCommentUpdate(data)
{data=$.parseJSON(data);var $commentPoints=$('#mod-comments .comments '+'#'+data.id).find('.comment-points');var points=Number($commentPoints.html())+Number(data.up)-Number(data.down);var pointsString=points>0?'+'+points:''+points;$commentPoints.html(pointsString);if(Number(data.up)>0){updateThumbsUpOnCookie(data.id);}else{updateThumbsDownOnCookie(data.id);}}
function reportComment(e)
{e.preventDefault();var commentId=$(this).closest('.comment')[0].id;$.ajax({url:EA.comments.commentReportUrl,data:({'commentId':commentId}),success:function(msg){updateReportedOnCookie(commentId,commentsStatus.reported);},error:function(jqXHR,textStatus){if(jqXHR.status==0||textStatus=='timeout'){alert('Error: Your request has timed out.');}else{alert('Error: Your report was not posted. Please try again later.');}}});$(this).parent().html(EA.comments.reportCommentMessage);$(this).remove();}
function initFacebookLink()
{if(window.EAFacebook===undefined){return;}
EAFacebook.initFacebookLink();if(typeof(FACEBOOK_LOGOUT)!="undefined"&&FACEBOOK_LOGOUT){EAFacebook.facebookConnect(false);}}
function isLoggedIn()
{return(EA.comments.login==true);}
function askToLogin(){var $loginToComment=$('#mod-comments .login-to-comment');$loginToComment.find('.error-messages').show();$('html,body').animate({scrollTop:$loginToComment.offset().top-100},250);}
function removeDuplicatedComments(prevIds,newIds){var duplicated=0;for(var i=prevIds.length;i<newIds.length;i++){if($.inArray(newIds[i],prevIds)>-1){$comments.find('div#'+newIds[i]+':last').parent().remove();duplicated++;}}
return duplicated;}
function isHidden(commentId){var commentInfo=getCommentInfo(commentId);if(commentInfo!=null){return(commentInfo[hiddenAttr]==commentsStatus.hidden);}
return false;}
function isShown(commentId){var commentInfo=getCommentInfo(commentId);if(commentInfo!=null){return(commentInfo[hiddenAttr]==commentsStatus.ignoreHidden);}
return false;}
function isThumbedUp(commentId){return getVote(commentId)==commentsStatus.thumbedUp;}
function isThumbedDown(commentId){return getVote(commentId)==commentsStatus.thumbedDown;}
function isReported(commentId){var commentInfo=getCommentInfo(commentId);if(commentInfo!=null){return(commentInfo[reportedAttr]==commentsStatus.reported);}
return false;}
function updateThumbsUpOnCookie(commentId){commentInfo=getCommentInfo(commentId);commentInfo[voteAttr]=commentsStatus.thumbedUp;commentInfo[hiddenAttr]=commentsStatus.notHidden;updateCommentInfo(commentId,commentInfo);}
function updateThumbsDownOnCookie(commentId){commentInfo=getCommentInfo(commentId);commentInfo[voteAttr]=commentsStatus.thumbedDown;commentInfo[hiddenAttr]=commentsStatus.hidden;updateCommentInfo(commentId,commentInfo);}
function updateHiddenOnCookie(commentId,hiddenValue){commentInfo=getCommentInfo(commentId);commentInfo[hiddenAttr]=hiddenValue;updateCommentInfo(commentId,commentInfo);}
function updateReportedOnCookie(commentId,reportedValue){commentInfo=getCommentInfo(commentId);commentInfo[reportedAttr]=reportedValue;updateCommentInfo(commentId,commentInfo);}
function setCommentsStatusCookie(commentsMap){var cookieString='';for(key in commentsMap){if(commentsMap.hasOwnProperty(key)){cookieString+=((cookieString=='')?'':commentsGlue)
+commentsMap[key][idAttr]
+commentsAttrGlue
+commentsMap[key][voteAttr]
+commentsAttrGlue
+commentsMap[key][hiddenAttr]
+commentsAttrGlue
+commentsMap[key][reportedAttr];}}
$.cookie(commentsCookie+EA.comments.userId,cookieString,{expires:360,path:'/'});}
function getCommentsMapFromCookie(){var commentsMap=new Array();var cookieValue=$.cookie(commentsCookie+EA.comments.userId);if(cookieValue!=undefined){var commentList=cookieValue.split(commentsGlue);var commentInfo;var key;for(var c=0;c<commentList.length;c++){commentInfo=commentList[c].split(commentsAttrGlue);attrArray=[commentInfo[0],commentsStatus.notThumbed,commentsStatus.notHidden,commentsStatus.notReported];key=getCommentKeyOnMap(commentInfo[0]);for(var attr=1;attr<commentInfo.length;attr++){attrArray[attr]=commentInfo[attr];}
commentsMap[key]=attrArray;}}
return commentsMap;}
function getCommentKeyOnMap(commentId){return'c'+commentId;}
function getCommentInfo(commentId){var key=getCommentKeyOnMap(commentId);var commentInfo=commentsStatusMap[key];if(commentInfo==undefined){commentInfo=[commentId,commentsStatus.notThumbed,commentsStatus.notHidden,commentsStatus.notReported];}
return commentInfo;}
function updateCommentInfo(commentId,value){commentsStatusMap[getCommentKeyOnMap(commentId)]=value;setCommentsStatusCookie(commentsStatusMap);}
function getVote(commentId){var vote=0;var commentInfo=getCommentInfo(commentId);if(commentInfo!=null){vote=parseInt(commentInfo[voteAttr]);}
return vote;}
function initCommentsStatusMap(){commentsStatusMap=getCommentsMapFromCookie();}
function getCommentsStatusConstants(){var commentsStatus={};commentsStatus.thumbedUp=1;commentsStatus.thumbedDown=-1;commentsStatus.notThumbed=0;commentsStatus.hidden=1;commentsStatus.notHidden=0;commentsStatus.ignoreHidden=-1;commentsStatus.reported=1;commentsStatus.notReported=0;return commentsStatus;}
function disableElementsFromCookie(){$('#mod-comments .mod-content .comments .comment').each(function(){if(isHidden(this.id)){$(this).addClass('hidden');}else if(isShown(this.id)){$(this).removeClass('hidden');}
if(isThumbedUp(this.id)){$(this).find('.btn-1-like').addClass('disabled');}
if(isThumbedDown(this.id)){$(this).find('.btn-1-dislike').addClass('disabled');}
if(isReported(this.id)){$(this).find('.comment-hidden-notice em').html(EA.comments.reportCommentMessage);}});}}})(jQuery,this);(function($)
{window.___gcfg={lang:$('body').attr('class').substring(0,2)};$(window).load(function()
{var $twitter=$('#mod-social-networks .social-buttons .twitter:visible');if($twitter.length>0){$(document.body).append('<script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>');}
var $digg=$('#mod-social-networks .social-buttons .digg:visible');if($digg.length>0){$(document.body).append('<script type="text/javascript" src="http://widgets.digg.com/buttons.js"></script>');}
var $reddit=$('#mod-social-networks .social-buttons .reddit');if($reddit.length>0){var write_string="<iframe src=\"http://www.reddit.com/static/button/button2.html?width=51&url=";if(window.reddit_url)
{write_string+=encodeURIComponent(reddit_url);}
else
{write_string+=encodeURIComponent(window.location.href);}
if(window.reddit_title)
{write_string+='&title='+encodeURIComponent(window.reddit_title);}
if(window.reddit_target)
{write_string+='&sr='+encodeURIComponent(window.reddit_target);}
if(window.reddit_css)
{write_string+='&css='+encodeURIComponent(window.reddit_css);}
if(window.reddit_bgcolor)
{write_string+='&bgcolor='+encodeURIComponent(window.reddit_bgcolor);}
if(window.reddit_bordercolor)
{write_string+='&bordercolor='+encodeURIComponent(window.reddit_bordercolor);}
if(window.reddit_newwindow)
{write_string+='&newwindow='+encodeURIComponent(window.reddit_newwindow);}
write_string+="\" height=\"69\" width=\"51\" scrolling=\"no\" frameborder=\"0\"></iframe>";$reddit.append(write_string);}
var $plusone=$('#mod-social-networks .social-buttons .googleplusone:visible');if($plusone.length>0){$('#mod-social-networks .social-buttons .plusone').append('<div class="widget"><div class="g-plusone" data-size="tall" data-count="true"></div></div>');$(document.body).append('<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>');}});})(jQuery);(function($,window,undefined){$(window).load(function(evt)
{$('.mod-ad-unit').each(function(idx)
{if(EA.adUnit.src[idx]=='')return true;var html=[];html[html.length]='<html>';html[html.length]='<head><title>Ad Unit</title></head>';html[html.length]='<body style="margin:0;padding:0;background-color:#000;">';html[html.length]='<scr'+'ipt type="text/javascript" src="'+EA.adUnit.src[idx]+'"></scri'+'pt>';html[html.length]='</body>';html[html.length]='</html>';var $iframe=$('<iframe width="100%" height="100%" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>').appendTo($(this).find('.mod-content'));var iframeDoc=($iframe[0].contentWindow)?$iframe[0].contentWindow.document:$iframe[0].contentDocument;iframeDoc.open();iframeDoc.write(html.join('\n'));if(!$.browser.msie)
{iframeDoc.close();}
else
{window.setTimeout(function()
{iframeDoc.close();},1000);}});});})(jQuery,this);;(function($,window,undefined){$(window).load(function()
{if(EA.stats!=null&&EA.stats.logViewUrl!==null)
{$.ajax({url:EA.stats.logViewUrl,type:'POST',success:function(data)
{return;}});}});})(jQuery,this);(function($,window,undefined){if(EA.mobile&&EA.mobile.agents){for(i in EA.mobile.agents){var regex=new RegExp(EA.mobile.agents[i],"i");if(navigator.userAgent.match(regex)){$('#mod-mobile-redirect').show();break;}}}})(jQuery,this);(function($,window,undefined){$(document).ready(function(){$('#mod-footer .mod-content .footer-links .links:last-child').css('border-right','0 none');var div_dev_logo=$('<div></div>').addClass('mod developer-logo');var lnk_dev_logo=$('<a></a>').attr('href','http://www.criteriongames.com/').attr('target','_blank');var img_dev_logo=$('<img />').attr('src',EA.staticPath+EA.skinPath+'img/logo_criterion.png').attr('width',175).attr('height',49).attr('alt','EA');$('.row-5 .col-1').append(div_dev_logo.append(lnk_dev_logo.append(img_dev_logo)));});})(jQuery,this);;(function($,window,undefined){if($.browser.msie)
{var $gusSubnav=$('#mod-gus .gus-items li .sub-nav');$gusSubnav.each(function(i)
{$(this).append('<div class="hk1" style="width:'+$(this).outerWidth()+'px;"><span></span></div>');});}})(jQuery,this);;(function($,window,undefined){$('#mod-menu li.has-sub-nav .sub-nav li a').append('<div class="hk1"></div><div class="hk2"></div><div class="hk3"></div><div class="hk4"></div>');})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){$(document).ready(function()
{var url=window.location.href.toLowerCase();if(url.indexOf("ep=marquee")>0){$('#mod-editorial-pod > .mod-content > .carousel').marquee();}else{$('#mod-editorial-pod > .mod-content > .carousel').carousel({step:1,visible:1,loop:true,effect:'fade',pagination:true,autoSlide:true});}});})(jQuery,this);;(function($,window,undefined){$(document).ready(function()
{$('#carousel-preorder').carousel({step:1,visible:3});});})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){$(document).ready(function()
{$('#carousel-review-ticker').carousel({step:1,visible:1,loop:true,effect:'fade',control:false,autoSlide:true,autoSlideInterval:8000});});})(jQuery,this);;(function($,window,undefined){$('#tabs-media-listing').tabs({cache:true,spinner:''});})(jQuery,this);;(function($,window,undefined){$(window).load(function()
{$('#mod-newsletter .mod-content .email .field-2').buttonset();$('#mod-newsletter .mod-content .birthday .field-1 select').selectmenu({width:70,menuWidth:88,maxHeight:100});$('#mod-newsletter .mod-content .birthday .field-2 select').selectmenu({width:40,menuWidth:58,maxHeight:100});$('#mod-newsletter .mod-content .birthday .field-3 select').selectmenu({width:50,menuWidth:68,maxHeight:100});});$('#formNewsletter').validation({success:function(evt,containerElm)
{var $containerElm=$(containerElm);var email=$('#newsletterEmail').val();var month=$('#newsletterMonth').val();var day=$('#newsletterDay').val();var year=$('#newsletterYear').val();var optIn=$('#newsletterSendExtra').attr('checked');$.ajax({type:"POST",url:EA.newsletter.subscribeUrl,data:"newsletterEmail={0}&newsletterMonth={1}&newsletterDay={2}&newsletterYear={3}&newsletterSendExtra={4}".replace("{0}",email).replace("{1}",month).replace("{2}",day).replace("{3}",year).replace("{4}",optIn),success:function(msg){var $msgContainer=$('#mod-newsletter .mod-header .message');if(msg=='SUCCESS'){$('#formNewsletter').addClass('signup-success');$msgContainer.find('.required-message').hide();$msgContainer.find('.success-message').html(EA.newsletter.thankYou);$msgContainer.find('.error-message').html('');}else{$('#formNewsletter').addClass('signup-error');$msgContainer.find('.required-message').hide();$msgContainer.find('.success-message').html('');$msgContainer.find('.error-message').html(msg);}},error:function(msg){$('#formNewsletter').addClass('signup-error');var $msgContainer=$('#mod-newsletter .mod-header .message');$msgContainer.find('.required-message').hide();$msgContainer.find('.success-message').html('');$msgContainer.find('.error-message').html(EA.newsletter.error);}});},error:function($elms,message)
{var $msgContainer=$('#mod-newsletter .mod-header .message');$msgContainer.find('.error-message').html(message);$elms.each(function(idx)
{$(this).parents('.field:first').addClass('field-error');});},required:function($elms)
{$('#mod-newsletter .mod-header .message .required-message').show();$elms.each(function(idx)
{$(this).parents('.field:first').addClass('field-error');});},trigger:{query:'#formNewsletter a.btn-1-action',evt:'click',before:function($elm)
{if($elm.hasClass('disabled'))
{return false;}
$elm.addClass('disabled');$elm.data('group').$containerElm.find('.field-error').removeClass('field-error');var $msgContainer=$('#mod-newsletter .mod-header .message');$msgContainer.find('.required-message').hide();$msgContainer.find('.error-message').html('');return true;},after:function($elm)
{$elm.removeClass('disabled');}}});})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){})(jQuery,this);;(function($,window,undefined){})(jQuery,this);(function($,window,undefined){$('#mod-related-games .mod-header h3 span').text('Recommended if you like:');display_developer_blog('http://blog.criteriongames.com/rss.xml');function display_developer_blog(rssFeed)
{var imgLoading=$('<img />').attr('src',EA.skinPath+'img/loading.gif'),divBlogContainer=$('<div></div>').addClass('mod mod-center-promos-blog'),divBlogHeader=$('<div></div>').addClass('mod-header'),divBlogContent=$('<div></div>').addClass('mod-content').append(imgLoading),divBlogFooter=$('<div></div>').addClass('mod-footer'),h3Header=$('<h3></h3>').append($('<span></span>').text('Developer Blog'));divBlogHeader.append(h3Header);if(typeof(google)!='undefined'&&rssFeed!='')
{google.load("feeds","1");function init_devblog(){var feed=new google.feeds.Feed(rssFeed),div_blogpost,a_title,p_snippet,div_date;feed.load(function(result){if(!result.error){divBlogContent.empty();for(var i=0;i<result.feed.entries.length;i++){var entry=result.feed.entries[i];a_title=$('<a></a>').attr('href',entry.link).attr('target','_blank').text(entry.title);p_snippet=$('<p></p>').html(entry.contentSnippet);div_date=$('<div></div>').addClass('blog-date').text('posted on '+entry.publishedDate);div_blogpost=$('<div></div>').addClass('blog-post').append(a_title).append(p_snippet).append(div_date);divBlogContent.append(div_blogpost);}}else{display_error_developer_blog(divBlogContent);}});}
google.setOnLoadCallback(init_devblog);}else{display_error_developer_blog(divBlogContent);}
divBlogContainer.append(divBlogHeader).append(divBlogContent).append(divBlogFooter);$('#mod-center-promos #flashPromo .bottomframe').empty().append(divBlogContainer);}
function display_error_developer_blog(div)
{div.empty();div.append($('<div></div>').text('The Developer Blog could not be loaded. Please retry later.'))
$('#mod-center-promos #flashPromo .bottomframe').css('min-height',110);}})(jQuery,this);