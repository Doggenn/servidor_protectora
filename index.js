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

app.get('/api/get_asociacion', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM asociacion_protectora', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})


app.listen(4000, () => console.log('hola soy el servidor'))