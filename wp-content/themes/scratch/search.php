<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package WordPress
 * @subpackage scratch
 */

get_header(); ?>
		<div id="container">
			<?
			$args = array('post_type' => 'post', 's'=>'"'.$s.'"', 'posts_per_page' => -1);
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
		</div><!-- #container -->
<?php get_footer(); ?>
