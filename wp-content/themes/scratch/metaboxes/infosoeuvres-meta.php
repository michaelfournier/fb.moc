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

	<p class="meta-save" style="float:right;"><button type="submit" class="button-primary" name="save"><?php _e('Update');?></button></p>

</div>