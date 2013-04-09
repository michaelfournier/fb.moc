<? global $wp_media_access;?>
<div class="my_meta_control">
 <?// $z =0; ?>
 
	<?php while($mb->have_fields_and_multi('blocspics')): ?>
	<?php $mb->the_group_open(); ?>
	
	<? $idx = $mb->get_the_index(); ?>
	
	<? if (!$mb->is_last() && !empty($mb->meta) ) { ?>

<!-- image -->
	<? if ($metabox->get_the_value("image")) { ?>
	
	<div class="mypic">	
		<h3 class="handle">↓ <?php _e('Image');?></h3>
		<? $mb->the_field('image'); ?>	

		<? $wp_media_access->setGroupName('img-n'. $mb->get_the_index())->setInsertButtonLabel('Inserer')->setTab('library'); ?>
		<!-- vignette preview -->	
		<div class="inside">
			<div style="clear:both; float:left" class="preview">
				<?
				$file_id = $mb->get_the_value();
				$image_thumbnail = @wp_get_attachment_image_src( $file_id, 'thumbnail', true );
				//$image_thumbnail = @$image_thumbnail[0];
				$image_html = "<img id='icon-thumbnail_preview' src='$image_thumbnail[0]' style='overflow:hidden' width='$image_thumbnail[1]' height='$image_thumbnail[2]' alt='' />";
				echo @$image_html;
				?>
			</div>
			<? 
			// si il n'y a pas d'image //
			if(!isset($file_id)) { $istherepic = "nopic"; } else { $istherepic = "yespic"; } ; 
			?>
			<!-- champ texte contenant l'id de l'image -->
			<div class="block <?= $istherepic; ?>" style="display:none">
				<? echo $wp_media_access->getIdField(array('name'=> $mb->get_the_name(), 'value'=> $mb->get_the_value())); ?>
			</div>
			<!-- bouton ajouter image -->	
				<? echo $wp_media_access->getButton(array('text'=> 'Choisir une image')); ?>
			<!-- nom de l'image -->
			<p>
				<span id="pic_name"><em><? if(!empty($file_id)) echo get_the_title($mb->get_the_value());?></em></span>
			</p>
		</div>
	</div>
	<? } ?>
	
<!-- media -->
<? if ($metabox->get_the_value("media")) { ?>
	<div class="mymedia">	
		<h3 class="handle">↓ <?php _e('Media (audio/vidéo)');?></h3>
		<? $mb->the_field('media'); ?>			
		<div class="inside">
			<textarea id="<?php $mb->the_name(); ?>" rows="10" cols="30" name="<?php $mb->the_name(); ?>" rows="3"><?php echo html_entity_decode($mb->get_the_value()); ?></textarea>
		</div>
		<div class="inside">
			<?php $yo = get_post_meta($post->ID, "_contentflux", true);

			//echo($yo['repeating_textareas'][$idx]['media']);

			 ?>
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
	<div class="mypic">
		<h3 class="handle">↓ <?php _e('Image');?></h3>
		<? $mb->the_field('image'); ?>					
		<? $wp_media_access->setGroupName('img-n'. $mb->get_the_index())->setInsertButtonLabel('Inserer')->setTab('library'); ?>
		<!-- vignette preview -->	
		<div class="inside">
			<div style="clear:both; float:left" class="preview">
				<?
				$file_id = $mb->get_the_value();
				$image_thumbnail = @wp_get_attachment_image_src( $file_id, 'thumbnail', true );
				//$image_thumbnail = @$image_thumbnail[0];
				$image_html = "<img src='$image_thumbnail[0]' style='overflow:hidden' width='$image_thumbnail[1]' height='$image_thumbnail[2]' alt='' />";
				echo @$image_html;
				?>
			</div>
			<? 
			// si il n'y a pas d'image //
			if(!isset($file_id)) { $istherepic = "nopic"; } else { $istherepic = "yespic"; } ; 
			?>
			<!-- champ texte contenant l'id de l'image -->
			<div class="block <?= $istherepic; ?>" style="display:none">
				<? echo $wp_media_access->getIdField(array('name'=> $mb->get_the_name(), 'value'=> $mb->get_the_value())); ?>
			</div>
			<!-- bouton ajouter image -->	
				<? echo $wp_media_access->getButton(array('text'=> 'Choisir une image')); ?>
			<!-- nom de l'image -->
			<p>
				<span id="pic_name"><em><? if(!empty($file_id)) echo get_the_title($mb->get_the_value());?></em></span>
			</p>
		</div>
	</div>
		

<!-- media -->
	<div class="mymedia">	
		<h3 class="handle">↓ <?php _e('Media (audio/vidéo)');?></h3>
		<? $mb->the_field('media'); ?>			
		<div class="inside">
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
		<a href="#" class="docopy-blocspics addpic button">Ajouter une image</a>
		<!-- <a href="#" class="docopy-blocspics addmedia button">Ajouter un media</a> -->
	</p>


	
	<p class="meta-save" style="float:right;"><button type="submit" class="button-primary" name="save"><?php _e('Update');?></button></p>

</div>