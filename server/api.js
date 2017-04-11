'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = require('../db/models').Campus
const Student = require('../db/models').Student

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

//GET
api.get('/campus',function(req,res,next){

	Campus.findAll()
	.then((data) => {
		res.json(data)
	})
	.catch(next)

})


api.get('/students',function(req,res,next){

	Student.findAll({
		include:[{model:Campus}]
	})
	.then((data) => {
		res.json(data)
	})
	.catch(next)

})

//POST
api.post('/campus',function(req,res,next){

    Campus.create(req.body)
	.then((data)=>{ 
		res.status(201).send(data) 
	}).catch(err => {
		console.log(err)
	})


})


api.post('/students',function(req,res,next){
	
	Student.create(req.body)
	.then((data)=>{ 
		res.status(201).send(data) 
	}).catch(err => {
		console.log(err)
	})
})





//DELETE
api.delete('/students/:id', function(req, res, next){

		Student.destroy({
			where:{
				id :  req.params.id
			}
		})
		.then((data) => {
			console.log(data)
			if(!data){
				res.sendStatus(404);
			}
		})
		.then((data) => {
			console.log(data)
			res.status(204)
			res.json(data)

		})
		.catch(next)

});




module.exports = api