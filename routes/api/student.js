const express = require('express');
const router = express.Router();
const knex = require('../../database/connection');


//Get All students
router.get('/', (req, res) =>{
    knex('student').select().then((student) =>{
        res.status(200).render('index', {data: student});;
        console.log(student);
    })
    .catch((error)=>{
        res.status(500).json({error});
    })
    
});

//Get one user
router.get('/info/:id', (req, res) =>{
    knex('student').select().where('id', req.params.id).then((student) =>{
        res.status(200).render('info', {data: student});;
        console.log(student);
    })
    .catch((error)=>{
        res.status(500).json({error});
    })
    
});

//Edit- Update member and get data
router.get('/editar/:id', (req, res) =>{

    
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

module.exports = router;

