'use strict';

const express = require('express');
const router = express.Router();
 // class
const Thing = require('../models/thing.js');
//new obj from the class
const thingInstance = new Thing(); 

// add my RESTFUL APIs declarations
router.get('/thing', getThing);
router.get('/thing/:id', getOneThing);
router.post('/thing', createThing);
router.put('/thing/:id', updateThing);
router.delete('/thing/:id', deleteThing);


function getThing(req, res) {
    // get all items
    let items = thingInstance.get();
    res.status(200).json(items);
}

function getOneThing(req, res) {
    let id = parseInt(req.params.id); // from the url its a string
    let oneItem = thingInstance.get(id);
    res.status(200).json(oneItem);
}

function createThing(req, res) {
    // use create Method from the class
    let obj = req.body;
    let newItem = thingInstance.create(obj);
    res.status(201).json(newItem);
}

function updateThing(req, res) {
    let id = parseInt(req.params.id);
    const obj = req.body;
    let updatedThing = thingInstance.update(id, obj);
    res.status(200).json(updatedThing);
}

function deleteThing(req, res) {
    let id = parseInt(req.params.id);
    let deleted = thingInstance.delete(id);
    let msg = deleted ? 'Item is deleted': 'Item was not Found'
    let statusCode = deleted ? 202 : 204;
    res.status(statusCode).json({
        msg: msg,
        deleted: deleted
    });
}


module.exports = router;