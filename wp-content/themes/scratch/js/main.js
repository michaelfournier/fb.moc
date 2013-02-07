/* author: vacuumRandom */
jQuery(document).ready(function() {
	//console.log(wp_bgdpics.pics, wp_bgdpics.front);

	if(wp_vars.pics) {
		jQuery.backstretch(wp_vars.pics, {duration: 4000, fade: 2050});
		}		
});
