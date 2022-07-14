const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM pacientes1', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO pacientes1 set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('paciente added!')
        })
    })
})

routes.delete('/:idpacientes1', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM pacientes1 WHERE idpacientes1 = ?', [req.params.idpacientes1], (err, rows)=>{
            if(err) return res.send(err)

            res.send('paciente excluded!')
        })
    })
})

routes.put('/:idpacientes1', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE pacientes1 set ? WHERE idpacientes1 = ?', [req.body, req.params.idpacientes1], (err, rows)=>{
            if(err) return res.send(err)

            res.send('paciente updated!')
        })
    })
})

module.exports = routes