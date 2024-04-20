const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))



const credentials = {
	host: 'pro.freedb.tech',
	user: 'Doggenn',
	password: 'deUkARF%!gW!5Xp',
	database: 'protectora'
}

app.get('/', (req, res) => {
	res.send('hola desde tu primera ruta de la Api pol');
})

app.post('/api/usuario/login', (req, res) => {
	const { usuario, password } = req.body
	const values = [usuario, password]
	var connection = mysql.createConnection(credentials)
	connection.query("SELECT * FROM usuarios WHERE usuario = ? AND password = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				res.status(200).send({
					"id": result[0].id,
					"usuario": result[0].usuario
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
app.post('/api/formulario', (req, res) => {
  const {
    id_usuario,
    id_mascota,
    other_animal,
    cuales,
    actitud,
    porqueadoptar,
    necesitades,
    nombre_completo,
    email,
    telefono,
    dni,
    direccion,
    codigo_postal,
    ciudad,
    tipo_vivienda,
    alquiler,
    casero,
    mudanza,
    jardin,
    compis,
    acuerdo_adopcion,
    acuerdo_visitas
  } = req.body;

  const values = [
    id_usuario,
    id_mascota,
    other_animal,
    cuales,
    actitud,
    porqueadoptar,
    necesitades,
    nombre_completo,
    email,
    telefono,
    dni,
    direccion,
    codigo_postal,
    ciudad,
    tipo_vivienda,
    alquiler,
    casero,
    mudanza,
    jardin,
    compis,
    acuerdo_adopcion,
    acuerdo_visitas
  ];

  var connection = mysql.createConnection(credentials);

  connection.query("INSERT INTO formulario_adopcion (id_usuario, id_mascota, other_animal, cuales, actitud, porqueadoptar, necesitades, nombre_completo, email, telefono, dni, direccion, codigo_postal, ciudad, tipo_vivienda, alquiler, casero, mudanza, jardin, compis, acuerdo_adopcion, acuerdo_visitas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('Formulario de adopción creado correctamente');
    }
  });

  connection.end();
});

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
app.get('/api/mascotas/:id', (req, res) => {
    const mascotaId = req.params.id;
    var connection = mysql.createConnection(credentials); 
    const query = 'SELECT * FROM mascotas WHERE id = ?';
    connection.query(query, [mascotaId], (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (rows.length > 0) {
                res.status(200).send(rows[0]);
            } else {
                res.status(404).send('Mascota no encontrada');
            }
        }
        connection.end();
    });
});

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

app.get('/api/personalidad/:id', (req, res) => {
    const personalidadId = req.params.id;
    var connection = mysql.createConnection(credentials); 
    const query = 'SELECT * FROM personalidad WHERE id_mascota = ?';
    connection.query(query, [personalidadId], (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (rows.length > 0) {
                res.status(200).send(rows[0]);
            } else {
                res.status(404).send('Personalidad no encontrada');
            }
        }
        connection.end();
    });
});

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

app.get('/api/salud/:id', (req, res) => {
    const personalidadId = req.params.id;
    var connection = mysql.createConnection(credentials); 
    const query = 'SELECT * FROM salud WHERE id_mascota = ?';
    connection.query(query, [personalidadId], (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (rows.length > 0) {
                res.status(200).send(rows[0]);
            } else {
                res.status(404).send('Salud de la mascota no encontrada');
            }
        }
        connection.end();
    });
});

app.get('/api/usuario', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM usuarios', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})
app.get('/api/mapas', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM mapas', (err, rows) => {
		if (err) {

			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.listen(4000, () => console.log('hola soy el servidor'))