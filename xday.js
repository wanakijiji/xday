/*
 * 指定の日付で表示するコンテンツを切り替えるjQueryプラグイン
 * ----------------------------------------------
 */

$( function() {

  $.fn.xday = function(date) {

		// 日付の取得
		var today = new Date() // 今日
		var xday = new Date(date) // Xデー
		// Xデー以降にコンテンツを表示
		if( today > xday ){
			$('.xday-before').hide()
			$('.xday-after').show()
		}

		return this;

	};

});