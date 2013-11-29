<? global $wp_media_access;?>
<?
add_action('admin_print_footer_scripts', 'my_action_javascript', 99);

function my_action_javascript() { ?>
<script type="text/javascript">
      function send_myid(leid, leselect) {
      console.log(leselect);
      var data = {
        action: 'my_action_callback',
        monid: leid,
        monselect: leselect
      };
      // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
      
      jQuery.post(ajaxurl, data, function(response) {
        // affiche la vignette //
        console.log(response);
        jQuery(response.selector).closest('.wpa_group, .mypic').find('.preview').html(response.image_html);
        // affiche le nom de l'image
        jQuery(response.selector).closest('.wpa_group').find('#pic_name').html(response.file_name);
      });
  }
</script>
<?php
}
?>
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
				<? echo $wp_media_access->getButton(array('label'=> 'Choisir une image')); ?>
			<!-- nom de l'image -->
			<p>
				<span id="pic_name"><em><? if(!empty($file_id)) echo get_the_title($mb->get_the_value());?></em></span>
			</p>

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
				<? echo $wp_media_access->getButton(array('label'=> 'Choisir une image')); ?>
			<!-- nom de l'image -->
			<p>
				<span id="pic_name"><em><? if(!empty($file_id)) echo get_the_title($mb->get_the_value());?></em></span>
			</p>
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
		<a href="#" class="docopy-blocspics addpic button">Ajouter une image</a>
		<!-- <a href="#" class="docopy-blocspics addmedia button">Ajouter un media</a> -->
	</p>


	
	<p class="meta-save" style="float:right;"><button type="submit" class="button-primary" name="save"><?php _e('Update');?></button></p>

</div>