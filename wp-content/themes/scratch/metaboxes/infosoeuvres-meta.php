<? global $wp_media_access; ?>
<div class="my_meta_control">
	<div class="oneblock">
		<h4>Année</h4>
		<?php $mb->the_field('annee'); ?>
		<input class="dp" type="text" name="<?php $mb->the_name(); ?>" value="<?php $mb->the_value(); ?>"/>
	</div>
 
	<div class="oneblock" style="width:100%; clear: both">
		<h4>Description <span>(français)</span></h4><span>renseigner ici : matériaux, dimension/durée, édition, courtesy, notes supplémentaires, etc...</span>
		<?php $mb->the_field('description_fr'); ?>
		<textarea name="<?php $mb->the_name(); ?>" rows="10"><?php $mb->the_value(); ?></textarea>
	</div>

	<div class="oneblock" style="width:100%; clear: both">
		<h4>Description <span>(english)</span></h4>
		<?php $mb->the_field('description_en'); ?>
		<textarea name="<?php $mb->the_name(); ?>" rows="10"><?php $mb->the_value(); ?></textarea>
	</div>

	<div class="mypic">
		<? $mb->the_field('presskit'); ?>
		<?php $wp_media_access->setGroupName('my-presskit')->setInsertButtonLabel('Insert')->setTab('library&post_mime_type=application/zip'); ?>			
		<!-- vignette preview -->	
		<div class="inside">
		<h4>Press Kit (.zip)</h4>
			<div style="clear:both; float:left" class="preview" id="pic">
				<?
				$file_id = $mb->get_the_value();
				$image_thumbnail = @wp_get_attachment_image_src( $file_id, 'full', true );
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
			<? echo $wp_media_access->getButton(array('label'=> 'Choisir un fichier')); ?>
			<a class="button" href="" onclick="jQuery(this).parent().find('#file_name, #pic').empty(); jQuery('.mediaid-my-presskit').val(''); return false;">supprimer le fichier</a>
			<!-- nom de l'image -->
			<p>
				<span id="pic_name"><em><? if(!empty($file_id)) echo get_the_title($mb->get_the_value());?></em></span>
			</p>
			<? $mb->the_field('presskit_url'); ?>	
		    <input type='hidden' name="<?= $mb->get_the_name(); ?>" id="<?= $mb->get_the_name(); ?>" value="<?= wp_get_attachment_url($file_id); ?>" />
		</div>
	</div>

	<p class="meta-save" style="float:right;"><button type="submit" class="button-primary" name="save"><?php _e('Update');?></button></p>
</div>