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
		
			<div class="tanvir-block-container">
				<RichText.Content tagName="h2" className="tanvir-block-title" value={ attributes.titletext } />
				<RichText.Content tagName="p" className="tanvir-block-des" value={ attributes.descriptiontext } />

				<form className="tanvir-block-form" action={actionUrl} method="post">
					<label for="name">Name:</label>
					<input type="text" id="name" name="user_name" />
					<label for="email">Email:</label>
					<input className="tanvir-block-input" type="email" id='email' placeholder="Enter your email address" />
					<input type="hidden" name="doubleoption" value={ attributes.doubleoption ? "On" : "Off" } />
					<input type="hidden" name="switch_option" value={ attributes.switch_option ? "yes" : "no" } />
					<button>{ attributes.btntext }</button>
				</form>

			</div>

		</div>
	);
}
