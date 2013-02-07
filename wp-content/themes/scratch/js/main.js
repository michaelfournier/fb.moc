/* author: vacuumRandom */
jQuery(document).ready(function() {
	console.log(wp_bgdpics.pics);

	if(wp_bgdpics.front)
		jQuery.backstretch(wp_bgdpics.pics, {duration: 4000, fade: 2050});		
});
