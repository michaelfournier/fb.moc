<? global $wp_media_access;?>
<?
?>
<div class="my_meta_control">
 <?// $z =0; ?>
 
	<?php while($mb->have_fields_and_multi('blocsvideos')): ?>
	<?php $mb->the_group_open(); ?>
	
	<? $idx = $mb->get_the_index(); ?>
	
	<? if (!$mb->is_last() && !empty($mb->meta) ) { ?>

	
<!-- media -->
<? if ($metabox->get_the_value("media")) { ?>
	<div class="mymedia">	
		<h3 class="handle">↓ <?php _e('Media (audio/vidéo)');?></h3>
		<? $mb->the_field('media'); ?>			
		<div class="inside">
			<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">
		<!-- champ texte légende -->
		<div class="block">
			<? $mb->the_field('legende_fr'); ?>	
			<h4>Légende <span>(français)</span></h4>
			<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">
			<? $mb->the_field('legende_en'); ?>	
			<h4>Légende <span>(english)</span></h4>
			<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">
		</div>
		</div>
	</div>
<? } ?>
		
	
	<? } else { ?>
	<? if($mb->is_first()) { ?>
		<style type="text/css">
			.wpa_loop .first {
			}
		</style>
	<? } ?>
		

<!-- media -->
	<div class="mymedia">	
		<h3 class="handle">↓ <?php _e('Media (audio/vidéo)');?></h3>
		<? $mb->the_field('media'); ?>			
		<div class="inside">
			<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">
		<!-- champ texte légende -->
		<div class="block">
			<? $mb->the_field('legende_fr'); ?>	
			<h4>Légende <span>(français)</span></h4>
			<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">
			<? $mb->the_field('legende_en'); ?>	
			<h4>Légende <span>(english)</span></h4>
			<input id="<?php $mb->the_name(); ?>" name="<?php $mb->the_name(); ?>" type="text" value="<?php echo $mb->get_the_value(); ?>">
		</div>
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
		<!-- <a href="#" class="docopy-blocsvideos addpic button">Ajouter une image</a> -->
		<a href="#" class="docopy-blocsvideos addmedia button">Ajouter une vidéo</a>
	</p>


	
	<p class="meta-save" style="float:right;"><button type="submit" class="button-primary" name="save"><?php _e('Update');?></button></p>

</div>