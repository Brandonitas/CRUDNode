const express = require('express');
const router = express.Router();
const knex = require('../../database/connection');


//Get All products
router.get('/', (req, res) =>{
    knex('products').select().then((products) =>{
        res.status(200).render('products', {title: 'Products', data: products});
    })
    .catch((error)=>{
        res.status(500).json({error});
    })
});

//Update member and get data
router.get('/editar/:id', (req, res) =>{
    const found = members.some(member => members.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: `Member not found with id ${req.params.id}`});
    }
});

//Update member and put data
router.put('/editar/:id', (req, res, next) =>{
    
});

//Creat member post
router.post('/', (req, res) =>{
    const newStudent= {
        name: req.body.name,
        matricula: req.body.matricula,
        carrera: req.body.carrera
    }

    if(!newStudent.name || !newStudent.matricula || !newStudent.carrera){
        return res.status(400).json({msg: 'Please include all data'});
    }

    //REAL TIME REFRESHH
    //res.redirect('/');
    
});

//Delete member get
router.get('/:id', (req, res) =>{
    
});



