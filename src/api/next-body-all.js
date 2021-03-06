'use strict'
const alfy = require('alfy')
const jsonfile = require('jsonfile')

jsonfile.writeFile(
	'./src/input/body.json',
	alfy.config.get('allPhrases'),
	{
		spaces: 2
	},
	error => {
		if (error !== null) {
			console.error(error)
		}
	}
)
