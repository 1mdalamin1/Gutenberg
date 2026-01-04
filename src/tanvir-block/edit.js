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
			<PanelBody title="Background Image" initialOpen={ true }> 
					<MediaUpload
						title={ __( 'Upload BG Image', 'tanvir-block' ) }
						allowedTypes={ [ 'image/jpeg', 'image/png' ] }
						value={ attributes.bg_image.id }
						onSelect={ ( bg_image ) => setAttributes( { bg_image: { id: bg_image.id, url: bg_image.url } } ) }
						render={ ( { open } ) => {
							if ( 0 === attributes.bg_image.id ) {
								return <Button onClick={ open }>{ __( 'Upload Image', 'tanvir-block' ) }</Button>;
							} else {
								return <>
									<img src={ attributes.bg_image.url } onClick={ open } />
									<Button onClick={ (bg_image) => setAttributes( { bg_image: { id: 0, url: '' } } ) }>
										{ __( 'Delete Image', 'tanvir-block' ) }
									</Button>
								</>;
							}
						} }
					/>
			</PanelBody>
			<PanelBody title="Cart Image" initialOpen={ false }> 
					<MediaUpload
						title={ __( 'Upload Cart Image', 'tanvir-block' ) }
						allowedTypes={ [ 'image/jpeg', 'image/png' ] }
						value={ attributes.image.id }
						onSelect={ ( image ) => setAttributes( { image: { id: image.id, url: image.url } } ) }
						render={ ( { open } ) => {
							if ( 0 === attributes.image.id ) {
								return <Button onClick={ open }>{ __( 'Upload Image', 'tanvir-block' ) }</Button>;
							} else {
								return <>
									<img src={ attributes.image.url } onClick={ open } />
									<Button onClick={ (image) => setAttributes( { image: { id: 0, url: '' } } ) }>
										{ __( 'Delete Image', 'tanvir-block' ) }
									</Button>
								</>;
							}
						} }
					/>
			</PanelBody>
		</InspectorControls>
			<div { ...useBlockProps() }>
				<div className="tanvir-block-card-wrap" style={{ backgroundImage: "url("+attributes.bg_image.url+")" }} >
					<div className="tanvir-block-card">
						<div className="tanvir-block-cta">
							<RichText
								tagName="h2"
								className="tanvir-block-title"
								placeholder="Enter title text"
								value={ attributes.titletext }
								allowedFormats={[]}
								onChange={ ( titletext ) => setAttributes( { titletext } ) }
							/>
							<RichText
								tagName="p"
								className="tanvir-block-des"
								placeholder="Enter description text"
								value={ attributes.descriptiontext }
								allowedFormats={[ "core/bold", "core/italic" ]}
								onChange={ ( descriptiontext ) => setAttributes( { descriptiontext } ) }
							/>
							<div className="tanvir-block-form">
								<input className="tanvir-block-input" type="email" placeholder="Enter your email address" disabled />
								<RichText
									tagName="span"
									className="tanvir-block-btn"
									placeholder="Enter button text"
									value={ attributes.btntext }
									onChange={ ( btntext ) => setAttributes( { btntext } ) }
								/>
							</div>
						</div>
						<div className="tanvir-block-img" style={{backgroundImage: `url( ${attributes.image.url} )` }}></div>
					</div>
				</div>
			</div>
		</>
	);
}
