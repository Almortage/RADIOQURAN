$(document).on('click', '.quran-social', function(e){
		var url = $(this).data("url");
		var type = $(this).data("type");
		var title = $(this).attr("title");

		if( type == "facebook" ) url = 'https://www.facebook.com/sharer.php?u=' + url;
		if( type == "twitter" ) url = 'https://twitter.com/share?url=' + url + "&text=" + title;
		if( type == "pinterest" ) url = 'https://pinterest.com/pin/create/bookmarklet/?url=' + url + "&description=" + title;
		if( type == "linkedin" ) url = 'https://www.linkedin.com/shareArticle?url=' + url + "&title=" + title;
		if( type == "whatsapp" ) url = 'https://api.whatsapp.com/send?text=' + url + "&title=" + title;

		if( type == "buffer" ) url = 'https://bufferapp.com/add?url=' + url + "&text=" + title;
		if( type == "tumblr" ) url = 'https://www.tumblr.com/share/link?url=' + url + "&name=" + title;
		if( type == "reddit" ) url = 'https://reddit.com/submit?url=' + url + "&title=" + title;
		if( type == "mix" ) url = 'https://mix.com/add?url=' + url;
		if( type == "evernote" ) url = 'https://www.evernote.com/clip.action?url=' + url + "&title=" + title;
		if( type == "pocket" ) url = 'https://getpocket.com/save?url=' + url + "&title=" + title;
		if( type == "wordpress" ) url = 'https://wordpress.com/press-this.php?u=' + url + "&t=" + title;

		window.open(url, '', "width=500,height=500,left=400px,top=100px,location=no");
});

jQuery(document).ready(function( $ ) {
	var hideHeader = localStorage.getItem('hide-header');
	var hideFooter = localStorage.getItem('hide-footer');
	var darkMod = localStorage.getItem('dark-mod');
	var gerURL = $('#site-url').attr('href');

	if( hideHeader == 1 ){
		$('.q-container').css('display', 'none');
		$("#hideHeader").prop('checked', true);
	}else{
		$('.q-container').css('display', 'block');
		$("#hideHeader").removeAttr("checked");
	}

	if( hideFooter == 1 ){
		$('.q-footer').css('display', 'none');
		$("#hideFooter").prop('checked', true);
	}else{
		$('.q-footer').css('display', 'block');
		$("#hideFooter").removeAttr("checked");
	}

	if( darkMod == 1 ){
		$('body').css('background', '#222222');
		$('.modal-body, .modal-header, .modal-footer, .white, .gray').css({
			background: '#333333',
			color: '#f7f7f7'
		});
		$('.q-footer a').css({
			color: '#f7f7f7'
		});
		$('.radio-category-title h1, .menu-container-top a, .radio-category, .radio-category a').css({
			color: '#f7f7f7'
		});
		$("#darkMod").prop('checked', true);
	}else{
		$('body').css('background', '#f7f7f7');
		$('.modal-body, .modal-header, .modal-footer, .white, .gray').css({
			background: '#f7f7f7',
			color: '#000000'
		});
		$('.q-footer a').css({
			color: '#333333'
		});
		$('.radio-category-title h1, .menu-container-top a, .radio-category, .radio-category a').css({
			color: '#333333'
		});
		$('.white').css({
			background: '#f7f7f7',
			color: '#000000',
			backgroundImage: "url('images/fMHY3YgZGYQH.jpg')",
			backgroundRepeat: 'no-repeat'
		});
		$('.gray').css({
			background: '#eeeeee',
			color: '#000000',
			backgroundImage: "url('images/npFm0VetEYUO.png')",
			backgroundRepeat: 'repeat'
		});
		$("#darkMod").removeAttr("checked");
	}

	$('#hideHeader').change(function() {
		if( $(this).is(':checked') ){
			$('.q-container').css('display', 'none');
			localStorage.setItem('hide-header', '1');
		}else{
			$('.q-container').css('display', 'block');
			localStorage.setItem('hide-header', '0');
		}
	});

	$('#hideFooter').change(function() {
		if( $(this).is(':checked') ){
			$('.q-footer').css('display', 'none');
			localStorage.setItem('hide-footer', '1');
		}else{
			$('.q-footer').css('display', 'block');
			localStorage.setItem('hide-footer', '0');
		}
	});

	$('.filter_categories').change(function() {
		var categoryClass = $(this).attr('data-class');
		if( $(this).is(':checked') ){
			$('#'+categoryClass).css('display', 'block');
		}else{
			$('#'+categoryClass).css('display', 'none');
		}
	});

	$('#darkMod').change(function() {
		if( $(this).is(':checked') ){
			$('body').css('background', '#222222');
			$('.modal-body, .modal-header, .modal-footer, .white, .gray').css({
				background: '#333333',
				color: '#f7f7f7'
			});
			$('.q-footer a').css({
				color: '#f7f7f7'
			});
			$('.radio-category-title h1, .menu-container-top a, .radio-category, .radio-category a').css({
				color: '#f7f7f7'
			});
			localStorage.setItem('dark-mod', '1');
		}else{
			$('body').css('background', '#f7f7f7');
			$('.modal-body, .modal-header, .modal-footer').css({
				background: '#f7f7f7',
				color: '#000000'
			});
			$('.q-footer a').css({
				color: '#333333'
			});
			$('.radio-category-title h1, .menu-container-top a, .radio-category, .radio-category a').css({
				color: '#333333'
			});
			$('.white').css({
				background: '#f7f7f7',
				color: '#000000',
				backgroundImage: "url('images/fMHY3YgZGYQH.jpg')",
				backgroundRepeat: 'no-repeat'
			});
			$('.gray').css({
				background: '#eeeeee',
				color: '#000000',
				backgroundImage: "url('images/npFm0VetEYUO.png')",
				backgroundRepeat: 'repeat'
			});
			localStorage.setItem('dark-mod', '0');
		}
	});

	$('.radio-info').click(function() {
		var radioID = $(this).attr('id');
		var radioName = $(this).attr('data-name');
		var radioPort = $(this).attr('data-port');
		var radioServer = $(this).attr('data-server');
		var radioURL = radioServer+':'+radioPort+'/;*.mp3';

		var getIcons = $('#'+radioID+' .radio-icons').html();

		var html;
		html = '<audio class="audio-player" src="'+ radioURL +'" controls autoplay></audio>';
		html += getIcons;

		$('#modalRadioLabel').html(radioName);
		$('#modalRadioBody').html(html);
	});

	$('.close-audio').click(function() {
		$('#modalRadioLabel').html('');
		$('#modalRadioBody').html('');
	});

});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
