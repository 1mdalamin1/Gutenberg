/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText  } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

	let actionUrl = '';
	if ( attributes.list_id ) {
		actionUrl = 'https://gmail.us21.list-manage.com/subscribe/post?u=YOUR_U_VALUE&id=' + attributes.list_id;
	} else {
		actionUrl = '#';
	}
	return (
		<div { ...useBlockProps.save() }>
			<div className="tanvir-block-card-wrap" style={{backgroundImage : `url(${attributes.bg_image.url})` }}>
				<div className="tanvir-block-card">
					<div className="tanvir-block-cta">
						<RichText.Content tagName="h2" className="tanvir-block-title" value={ attributes.titletext } />
						<RichText.Content tagName="p" className="tanvir-block-des" value={ attributes.descriptiontext } />
						<form className="tanvir-block-form" action={actionUrl} method="post">
							<input className="tanvir-block-input" type="email" placeholder="Enter your email address" />
							<input type="hidden" name="doubleoption" value={ attributes.doubleoption ? "On" : "Off" } />
							<input type="hidden" name="switch_option" value={ attributes.switch_option ? "yes" : "no" } />
							<RichText.Content tagName="span" className="tanvir-block-btn" value={ attributes.btntext } />
						</form>
					</div>
					<div className="tanvir-block-img" style={{backgroundImage : `url(${attributes.image.url})` }}></div>
				</div>
			</div>
		</div>
	);
}
