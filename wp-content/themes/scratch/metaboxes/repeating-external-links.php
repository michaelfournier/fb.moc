<?
add_action('admin_print_footer_scripts','my_admin_print_footer_scripts',999);
function my_admin_print_footer_scripts()
{
	?><script type="text/javascript">/* <![CDATA[ */
		jQuery(function($)
		{
			$('#wpa_loop-content_links').sortable({
				 axis:'y',
				 cursor: 'move'
			});		
		});
	/* ]]> */</script><?php
}
?>
<div class="my_meta_control">
 <?// $z =0; ?>
 
	<?php while($mb->have_fields_and_multi('content_links')): ?>
	<?php $mb->the_group_open(); ?>
	
	<? $idx = $mb->get_the_index(); ?>
	
	<? if (!$mb->is_last() && !empty($mb->meta) ) { ?>

		<!-- tweet -->
		<? if ($metabox->get_the_value("linkurl")) { ?>
			<div class="mylink">	
				<h3 class="handle">↓ <?php echo "Lien";?></h3>
							
				<div class="inside">
					<? $mb->the_field('linkname_fr'); ?>
					<span>intitulé du lien (FR)</span>
					<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">

					<? $mb->the_field('linkname_en'); ?>
					<span>intitulé du lien (EN)</span>
					<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">

					<? $mb->the_field('linkurl'); ?>
					<span>url du lien</span>
					<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">
										
				</div>
			</div>
		<? } ?>
			
	<? } else { ?>
	<? if($mb->is_first()) { ?>
		<style type="text/css">
			.wpa_loop .first {
				display:none;
			}
		</style>
	<? } ?>

	<!-- lien -->
		<div class="mylink">	
			<h3 class="handle">↓ <?php echo "Lien";?></h3>
			<? $mb->the_field('linkurl'); ?>			
				<div class="inside">
					<? $mb->the_field('linkname_fr'); ?>
					<span>intitulé du lien (FR)</span>
					<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">

					<? $mb->the_field('linkname_en'); ?>
					<span>intitulé du lien (EN)</span>
					<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">

					<? $mb->the_field('linkurl'); ?>
					<span>url du lien</span>
					<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">
									
				</div>
		</div>
		
	<? } ?>

	<div class="block">
		<a href="#" class="dodelete button"><?php _e('Delete');?></a>
	</div>
	
	<? //$z++;?>
	<?php $mb->the_group_close(); ?>
	<?php endwhile; ?>
 
	<p class="block">
		<a href="#" class="docopy-content_links addlink button">Ajouter un lien</a>
	</p>

	
	<p class="meta-save" style="float:right;"><button type="submit" class="button-primary" name="save"><?php _e('Update');?></button></p>

</div>