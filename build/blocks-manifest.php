<?php
// This file is generated. Do not modify it manually.
return array(
	'my-contact' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'tanvir-blocks/my-contact',
		'version' => '0.1.0',
		'title' => 'My Contact',
		'category' => 'tanvirblocks',
		'description' => 'My Contact is Contact block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => true,
			'align' => true,
			'color' => array(
				'gradients' => true,
				'link' => true,
				'custom' => true,
				'text' => true,
				'background' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'letterSpacing' => true,
				'fontFamily' => true,
				'textTransform' => true,
				'fontStyle' => true,
				'fontWeight' => true
			),
			'customClassName' => true,
			'className' => true,
			'anchor' => true
		),
		'textdomain' => 'tanvir-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'titletext' => array(
				'type' => 'string',
				'selector' => 'h2',
				'default' => 'Join Our Newsletter',
				'source' => 'text'
			),
			'descriptiontext' => array(
				'type' => 'string',
				'selector' => 'p',
				'default' => 'Subscribe to our Newsletter',
				'source' => 'html'
			),
			'btntext' => array(
				'type' => 'string',
				'selector' => 'button',
				'default' => 'Contact Us',
				'source' => 'text'
			),
			'list_id' => array(
				'type' => 'string',
				'default' => '123456'
			),
			'doubleoption' => array(
				'type' => 'boolean',
				'default' => false
			),
			'switch_option' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bg_image' => array(
				'type' => 'object',
				'default' => array(
					'id' => 0
				)
			),
			'image' => array(
				'type' => 'object',
				'default' => array(
					'id' => 0
				)
			)
		)
	),
	'my-cta' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'tanvir-blocks/my-cta',
		'version' => '0.1.0',
		'title' => 'My CTA',
		'category' => 'tanvirblocks',
		'icon' => 'superhero',
		'description' => 'My CTA is Call To Action block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => true,
			'align' => true,
			'color' => array(
				'gradients' => true,
				'link' => true,
				'custom' => true,
				'text' => true,
				'background' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'letterSpacing' => true,
				'fontFamily' => true,
				'textTransform' => true,
				'fontStyle' => true,
				'fontWeight' => true
			),
			'customClassName' => true,
			'className' => true,
			'anchor' => true
		),
		'textdomain' => 'tanvir-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'titletext' => array(
				'type' => 'string',
				'selector' => 'h2',
				'default' => 'Join Our Newsletter',
				'source' => 'text'
			),
			'descriptiontext' => array(
				'type' => 'string',
				'selector' => 'p',
				'default' => 'Subscribe to our Newsletter',
				'source' => 'html'
			),
			'btntext' => array(
				'type' => 'string',
				'selector' => 'span',
				'default' => 'Subscribe',
				'source' => 'text'
			),
			'list_id' => array(
				'type' => 'string',
				'default' => '123456'
			),
			'doubleoption' => array(
				'type' => 'boolean',
				'default' => false
			),
			'switch_option' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bg_image' => array(
				'type' => 'object',
				'default' => array(
					'id' => 0
				)
			),
			'image' => array(
				'type' => 'object',
				'default' => array(
					'id' => 0
				)
			)
		)
	)
);
