const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouterLearning = function (collection) {

  const router = express.Router();

	router.get('/', (req, res) => {
		collection.find().toArray()
		.then(docs => res.json(docs))
		.catch(err => {
			console.error(err);
			res.status(500);
			res.json({ status: 500, error: err });
		});
	});

	router.get('/:module', (req, res) => {
		const moduleID = req.params.module

		collection.find({
			moduleID: moduleID
		}).toArray()
		.then(docs => res.json(docs))
		.catch(err => {
			console.error(err);
			res.status(500);
			res.json({ status: 500, error: err });
		});
	});

	router.get('/:module/:page', (req, res) => {
		const moduleID = req.params.module
		const page = parseInt(req.params.page)

		collection.findOne({
			moduleID: moduleID,
			pageNumber: page
		})
		.then(result => res.json(result))
		.catch(err => {
			console.error(err);
			res.status(500);
			res.json({ status: 500, error: err });
		});
	});

  return router;
};

module.exports = createRouterLearning;
