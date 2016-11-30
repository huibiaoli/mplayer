(function() {
	'use strict';
	
	var skinName = 'mplayer-basic';
	var type = 'audio';

	if(window.MPlayerSkinList[skinName + '-' + type] === undefined) {
		window.MPlayerSkinList[skinName + '-' + type] = 
			'<div class="mplayer mplayer-basic is-audio" data-maxwidth-375="is-small" data-minwidth-800="is-big">' +
			'	<div class="media-el"></div>' +
			'	<div class="controls">' +
			'		<button type="button" class="btn-play-puase" data-first-text="재생" data-second-text="일시정지">재생</button>' + 
			'		<div class="progress-wrap">' + 
			'			<div class="slider progress">' + 
			'				<span class="btn"></span>' + 
			'				<span class="buffered"></span>' + 
			'			</div>' + 
			'			<div class="time-wrap">' + 
			'				<span class="current-time">00:00</span>' +
			'				 / ' + 
			'				<span class="total-time">00:00</span>' + 
			'			</div>' + 
			'		</div>' + 
			'		<div class="volume-wrap">' + 
			'			<button type="button" class="btn-mute" data-first-text="음소거" data-second-text="음소거 해제">음소거</button>' + 
			'			<div class="slider volume">' + 
			'				<span class="btn"></span>' + 
			'			</div>' + 
			'		</div>' + 
			'	</div>' +
			'</div>'
		;
	}

})();