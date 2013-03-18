<?php
/**
 * The loop that displays a page.
 *
 * The loop displays the posts and the post content. See
 * http://codex.wordpress.org/The_Loop to understand it and
 * http://codex.wordpress.org/Template_Tags to understand
 * the tags used in it.
 *
 * This can be overridden in child themes with loop-page.php.
 *
 * @package WordPress
 * @subpackage scratch
 */
?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
	<article style="display: none;">
		<h1><?php the_title(); ?></h1>
		<p class="entry-content">
			<?php the_content(); ?>
		</p><!-- .entry-content -->
	</article><!-- article-## -->
<?php endwhile; // end of the loop. ?>