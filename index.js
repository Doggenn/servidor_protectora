const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))



// const JWT = require('jsonwebtoken')
// const secretWord = 'Samus#Aran'

const credentials = {
	host: 'pro.freedb.tech',
	user: 'Doggenn',
	password: 'deUkARF%!gW!5Xp',
	database: 'protectora'
}

app.get('/', (req, res) => {
	res.send('hola desde tu primera ruta de la Api pol');
})

app.post('/api/login', (req, res) => {
	const { username, password } = req.body
	const values = [username, password]
	var connection = mysql.createConnection(credentials)
	connection.query("SELECT * FROM login WHERE username = ? AND password = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				res.status(200).send({
					"id": result[0].id,
					"user": result[0].user,
					"username": result[0].username
				})
			} else {
				res.status(400).send('Usuario no existe')
			}
		}
	})
	connection.end()
})

app.get('/api/adopcion', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM adopcion', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.get('/api/asociacion', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM asociacion_protectora', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.get('/api/eventos', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM eventos', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})
app.get('/api/favoritos', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM favoritos', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.get('/api/formulario_adopcion', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM formulario_adopcion', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.get('/api/mascotas', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM mascotas', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.get('/api/novedades', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM novedades', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.get('/api/personalidad', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM personalidad', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.get('/api/salud', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM salud', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.get('/api/usuarios', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM usuarios', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.listen(4000, () => console.log('hola soy el servidor'))