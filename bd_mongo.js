// Se utiliza para ver las bases de datos
show databases

//Verifica en que base de datos se esta utilizando--
db.getName()

// Generar base de datos --
use concesionario

// Muestra las colecciones generadas en la base de datos--
show collections

// crea un nuevo registro o documento--
var user = {
  name: 'Eduardo',
 las_name: 'Garcia',
 age: 26,
 email: 'eduardo@codigofacilito.com'
 }

// Muestra el registro recien generado--
user //nombre del registro

// recibe un documento como argumento --
db.users.insert(user)

// comando que busca la coleccion --
db.user.find ()

crear .js
// insertOne ejecuta un documento --
var user2 = {
name: 'fernando',
last_name: 'garcia',
age: 24,
email: 'fernando@codigofacilito.com'
}
user2
db.users.insertOne(user2)

// insertMany permite insertar distintos documentos en una coleccion --
var user3 = {
 name: 'moral',
 las_name: 'orel',
 age: 26,
 email: 'moral@codigofacilito.com'
 }

user3

var user4 = {
name: 'ariel',
last_name: 'garza',
age: 24,
email: 'ariel@codigofacilito.com'
}

user4

db.users.insertMany([user3,user4])


//insert ya no existe--