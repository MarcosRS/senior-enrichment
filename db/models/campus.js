'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('Campus', {
			name:{
				type: Sequelize.STRING,
				allowNull: false,
			},
			img:{
				type: Sequelize.STRING,
				allowNull: true,
			}
		}

	);
