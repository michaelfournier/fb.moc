<?php
/*
Plugin Name: mic-trans-customfields
Plugin URI:
Description: simple fonction de traduction des métadonnées, utilisant qtranslate
Version: 1.0
Author: vacuumRandom
Author URI: http://vacuumRandom.com
License: A "Slug" license name e.g. GPL2
*/

// fonction de traduction des metadonnées //
function trad_customfield ($tab, $field) {
	$lang = qtrans_getLanguage();	
		if ($lang == "fr") {
			//$tab[$k][$field."_en"] = null;
			return $tab[$field."_fr"];
		} else {
			if(empty($tab[$field.'_en'])) {
				//$tab[$k][$field."_en"] = null;
				return $tab[$field."_fr"];
			} else {
				//$tab[$k][$field."_fr"] = null;
				return $tab[$field."_en"];
			}
		};
}

?>