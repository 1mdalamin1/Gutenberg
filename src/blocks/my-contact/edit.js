/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl, CheckboxControl, ToggleControl, Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<>
		<InspectorControls>
			<PanelBody title="Mailchimp Settings" initialOpen={ false }>
				<PanelRow>
					<TextControl
						label="List ID (Audience ID)"
						value={ attributes.list_id }
						onChange={ ( list_id ) => setAttributes( { list_id } ) }
					/>
				</PanelRow>
				<PanelRow>
					<CheckboxControl
						label="Double Option"
						checked={ attributes.doubleoption }
						onChange={ () => setAttributes( { doubleoption : ! attributes.doubleoption } ) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label="Switch Option"
						checked={ attributes.switch_option }
						onChange={ () => setAttributes( { switch_option : ! attributes.switch_option } ) }
					/>
				</PanelRow>
			</PanelBody>
			
		</InspectorControls>
			<div { ...useBlockProps() }>
				
					<div className="tanvir-block-container">
					
						<RichText
								tagName="h2"
								className="tanvir-title"
								placeholder="Enter title text"
								value={ attributes.titletext }
								allowedFormats={[]}
								onChange={ ( titletext ) => setAttributes( { titletext } ) }
							/>
							<RichText
								tagName="p"
								className="tanvir-des"
								placeholder="Enter description text"
								value={ attributes.descriptiontext }
								allowedFormats={[ "core/bold", "core/italic" ]}
								onChange={ ( descriptiontext ) => setAttributes( { descriptiontext } ) }
							/>
						<div className="tanvir-block-form">
							<label for="name">Name:</label>
							<input type="text" id="name" name="user_name" />
							<label for="email">Email:</label>
							<input className="tanvir-block-input" type="email" id='email' placeholder="Enter your email address" />
										
							<RichText
								tagName="button"
								className="tanvir-block-btn"
								placeholder="Enter button text"
								value={ attributes.btntext }
								onChange={ ( btntext ) => setAttributes( { btntext } ) }
							/>
							
						</div>

					</div>

			</div>
		</>
	);
}
