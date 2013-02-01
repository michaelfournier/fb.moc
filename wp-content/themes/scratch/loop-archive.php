<?php
/**
 *
 * @package WordPress
 * @subpackage scratch
 */
?>

<?
/*
function filter_fields() {
	$fields = "ID, post_name, post_type, post_parent, guid, post_title, post_status, post_content";
	return $fields;
}
add_filter('posts_fields', 'filter_fields');
*/
$args = array('fields'=>'ids', 'post_type' => 'post', 'posts_per_page' => -1);
$allposts = new WP_query($args);
?>
<? if ( $allposts->have_posts() ):
 while ( $allposts->have_posts() ) : $allposts->the_post(); ?>
<section>
	<h2>
		<a href="<?= get_permalink(); ?>"><? the_title(); ?></a>
	</h2>
</section>

<? endwhile; else : ?> No posts <? endif; ?>


