# challenge-colektia

### Primero se deben instalar las dependencias

```
npm install
```

### Configurar las variables de entorno en un .env ubicado en el root del proyecto

| Tenga en cuenta que el server de Vue envia la solicitudes al localhost y al puerto 8080

```
SERVER_PORT = 8080
DB_HOST = localhost
DB_USER = tu-usuario
DB_PASSWORD = tu-contraseña
DB = productos
```

### Levantar el server

```
npm run start
```

# Endpoints de la API

## Obtener todos los productos o por su nombre

- URL
  Obtener todos
  /api/productos/
  O
  Obtener aquellos con el nombre de parametro
  /api/productos/?nombre=
- Metodo

  `GET`

- Parametros de la url

  Opcional:

  `nombre=[string]`

- Respuesta de Exito

  **Codigo**: 200
  
  **Contenido**:
  
  ```
  { data: 
  	[ 
		{
			id:0, 
			nombre:"remera", 
			descripcion: "Remera talle XL", 
			habilitado: true, 
			imagen:null
		}, 
		{
			id: 1,
			nombre:"pantalon", 
			descripcion:"Pantalon bordado gris", 
			habilitado: false, 
			imagen:'pantalon.jpg'
		} 
	]
	}
  ```

- Respuesta de Error

  **Codigo**: 500
  
  **Contenido**: `{ message: err.message || "Ocurrio un error al obtener los Productos" }`

- Ejemplo
  ```
  axios.get('/api/productos/')
  	.then((response) =>
	{
  		console.log(response.data)
  	})
  	.catch((error) => {
  		console.log(error)
  	})
  ```
  ```
  axios.get('/api/productos/?nombre=remera')
  	.then((response) =>
	{
  		console.log(response.data)
	})
  	.catch((error) => {
  		console.log(error)
  	})
  ```

## Obtener un producto por su id

- URL

  /api/productos/:id

- Metodo

  `GET`

- Parametros de la url

  Obligatorios:

  `id=[integer]`

- Respuesta de Exito

  **Codigo**: 200
  
  **Contenido**:

  ```
  { data:
  	{
  		id:0,
  		nombre:"remera",
  		descripcion: "Remera talle XL",
  		habilitado: true,
  		imagen: null
  	}
  }
  ```

- Respuesta de Error

  **Codigo**: 500
  
  **Contenido**: `{ message: "Ocurrio un error al obtener el Producto. Quizas no existe" }`

  o

  **Codigo**: 500
  
  **Contenido**: `{ message: "Ocurrio un error al obtener Producto con id=" + id }`

- Ejemplo
  ```
  axios.get('/api/productos/1')
  	.then((response) => {
  		console.log(response.data)
  	})
  	.catch((error) => {
  		console.log(error)
  	})
  ```

## Crear

- URL

  /api/productos/

- Método

  POST

- Parámetros de la url

  No tiene

- Parámetros del body de la solicitud

  ```
  body :
  	{
  		nombre:'remera',
  		descripcion:"Una remera xl",
  		habilitado:true,
  		imagen:'null'
  	}
  ```

- Respuesta de Éxito:

  **Codigo**: 200
  
  **Contenido**:

  ```
  producto:
  	data:
  		{
  			{
  				id:1,
  				nombre:'remera',
  				descripcion:"Una remera xl",
  				habilitado:true,
  				imagen:'null',
  				updatedAt: 2021-06-09T11:34:59.221Z,
  			    createdAt: 2021-06-09T11:34:59.221Z
  			}
  		}
  ```

- Respuesta de Error

  **Codigo**: 500
  
  Contenido: `{ message: err.message || "Ocurrio un error al crear el producto."}`

  O

  **Codigo**: 400
  
  Contenido: `{ message: "El nombre no puede estar vacio"}`

- Ejemplo

```
	axios.post('/api/productos/',
		{
			nombre: 'remera',
			descripcion: "Una remera xl",
			habilitado: true,
			imagen: 'null'
		})
	.then((response) => {
		console.log(response.data)
	})
	.catch((error) => {
		console.log(error)
	})
```

## Editar un producto

- URL

/api/productos/:id

- Metodo

`PUT`

- Parametros de la url

Obligatorios:

`id=[integer]`

- Parametros del body

```
	body :
		{
			nombre: [string],
			descripcion: [string],
			habilitado: [boolean],
			imagen: [string, blob,'null']
		}
```

- Respuesta de Exito

  **Codigo**: 200
  
  **Contenido**: `{ message: "Se edito el Producto satisfactoriamente."}`

- Respuesta de Error

  **Codigo**: 500
  
  **Contenido**: `{ message: "Se edito el Producto satisfactoriamente." }`

  O

  **Codigo**: 500
  
  **Contenido**: `{ message:  No se puede editar el Producto con id=${id}. Quizas el Producto no existe o el cuerpo de la solicitud esta vacio. }`

  O

  **Codigo**: 500
  
  **Contenido**: `{ message:  "Ocurrio un error editando el Producto con id=" + id }`

- Ejemplo

```
axios.put('/api/productos/',
		{
			nombre: 'remera',
			descripcion: "Una remera xl",
			habilitado: true,
			imagen: 'null'
		})
	.then((response) => {
		console.log(response.data)
	})
	.catch((error) => {
		console.log(error)
	})
```

- Comentarios:

  Este metodo se reutiliza para editar por separado el estado de habilitacion del producto o su imagen. En caso de recibir algun campo sin cambios solo se le re asigna su valor original.

## Borrar un Producto

- URL

/api/productos/:id

- Metodo

`DELETE`

- Parametros de la url

Obligatorios:

id=[integer]

- Respuesta de Exito

  **Código**: 200
  
  **Contenido**: `{ message: "El producto fue eliminado satisfactoriamente!."}`

- Respuesta de Error

  **Código**: 500
  
  **Contenido**: `{ message: No se puede eliminar el producto con id=${id}. Tal vez el producto no fue encontrado. }`

  O

  **Código**: 500
  
  **Contenido**: `{ No se pudo eliminar el producto con el id=" + id }`

- Ejemplo

```
axios.delete('/api/productos/1')
	.then((response) => {
		console.log(response.data)
	})
	.catch((error) => {
		console.log(error)
	})
```
