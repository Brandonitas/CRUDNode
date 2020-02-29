const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const knex = require('../../database/connection');

//Create NEW Student
router.post('/', (req, res) => {
    const newStudent= {
        name: req.body.name,
        matricula: req.body.matricula,
        carrera: req.body.carrera
    }

    if(!newStudent.name || !newStudent.matricula || !newStudent.carrera){
        return res.status(400).json({msg: 'Ingresa todos los datos'});
    }else{
        knex('student').insert(newStudent).then((student) => {
            res.redirect('/');
        })
        .catch((error) => {
          response.status(500).json({ error });
        });
    }
    
});

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
    knex('student').select().where('id', req.params.id).then((student) =>{
        res.status(200).render('editar', {data: student});;
        console.log(student);
    })
    .catch((error)=>{
        res.status(500).json({error});
    });

});

//Edit- Update member and put data
router.post('/editar/:id', (req, res) =>{
    knex('student').update(
        {name: req.body.name,
        matricula: req.body.matricula,
        carrera: req.body.carrera
        }
    ).where('id', req.params.id).then((student) =>{
        //res.status(200).render('/', {data: student});;
        //console.log(student);
        //res.redirect('/');
        res.status(200);
    })
    .catch((error)=>{
        res.status(500).json({error});
    });

});


//Delete student
/*router.get('/eliminar/:id', (req, res) =>{
    knex('student').where('id', req.params.id).del().then((student) =>{
        res.redirect('/');
    });
});*/

/*function deleteStudent(id) {
    knex('student').where('id', id).del().then((student) =>{
        console.log("ELIMINADO USUARIO:");
        res.redirect('/');
    });
};*/


//Edit- Update member and put data
router.put('/editar/:id', (req, res) =>{
    knex('student').update(
        {name: req.body.name,
        matricula: req.body.matricula,
        carrera: req.body.carrera
        }
    ).where('id', req.params.id).then((student) =>{
        //res.status(200).render('/', {data: student});;
        //console.log(student);
        res.status(200).send('OK');
    })
    .catch((error)=>{
        res.status(500).json({error});
    });
});


//Delete 
router.delete('/eliminar/:id', (req, res) =>{
    knex('student').where('id', req.params.id).del().then((student) =>{
        return res.status(200).send('OK');
        //res.redirect('/');
    });
});


module.exports = router;

