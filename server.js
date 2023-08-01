const db = require('./app/models/index.js')
const userController = require('./app/controllers/user.controller.js')
const bootcampController = require('./app/controllers/bootcamp.controller.js')
const matriculaController = require('./app/controllers/matricula.controller.js')

const crearUser = async () =>{
    /* creacion usuarios */
    const usuario_1 = await userController.createUser({firstName: 'Mateo', lastName: 'Díaz', email: 'mateo.diaz@correo.com'})
    const usuario_2 = await userController.createUser({firstName: 'Santiago', lastName: 'Mejías', email: 'santiago.mejias@correo.com'})
    const usuario_3 = await userController.createUser({firstName: 'Lucas', lastName: 'Rojas', email: 'lucas.rojas@correo.com'})
    const usuario_4 = await userController.createUser({firstName: 'Facundo', lastName: 'Fernandez', email: 'facundo.fernandez@correo.com'})
}

const crearBootcamp = async () =>{
    const curso_1 = await bootcampController.createBootcamp({title: 'Introduciendo El Bootcamp De React.',cue: 10, description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.'})
    const curso_2 = await bootcampController.createBootcamp({title: 'Bootcamp Desarrollo Web Full Stack.',cue: 12, description: 'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.'})
    const curso_3 = await bootcampController.createBootcamp({title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning.',cue: 18, description: 'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.'})
}

const crearMatricula = async () =>{
    const matricula_1 = await matriculaController.matricularUsuario(1,1)
    const matricula_2 = await matriculaController.matricularUsuario(2,1)
    const matricula_3 = await matriculaController.matricularUsuario(1,2)
    const matricula_4 = await matriculaController.matricularUsuario(1,3)
    const matricula_5 = await matriculaController.matricularUsuario(2,3)
    const matricula_6 = await matriculaController.matricularUsuario(4,3)
}


//  Consultas
    const consultarUserId = async (idUsuario) =>{
        let resultado = await userController.findUserById(1)
        if(resultado == null){ resultado = 'Usuario No Encontrado' }
        console.log(JSON.stringify(resultado,null,3))
    }    

    const consultarUsers = async () =>{
        let resultado = await userController.findUserAll()
        console.log(JSON.stringify(resultado,null,3))
    }

    const updUser = async (idUsuario,DatosUpd) =>{
        let resultado = await userController.updateUserById(1,{firstName:'Pedro',lastName:'Sanchez'})
        let resUpd = await userController.findUserById(idUsuario)
        if(resUpd == null){ resUpd = 'Usuario No Encontrado' }
        console.log(JSON.stringify(resUpd,null,3))
    }

    const delUser = async (idUsuario) =>{
        let resultado = await userController.deleteUserById(idUsuario)
        if(resultado == null){ resultado = 'Usuario No Encontrado' }
        let resDel = await userController.findUserAll()
        console.log(JSON.stringify(resDel,null,3))
    }
  
    const consultarBootcampId = async (idBootcamp) =>{
        let resultado = await bootcampController.findById(1)
        if(resultado == null){ resultado = 'Bootcamp No Encontrado' }
        console.log(JSON.stringify(resultado, null,3))
    }

    const consultarBootcamps = async () =>{
        let resultado = await bootcampController.findAll()
        console.log(JSON.stringify(resultado, null,3))
    }

        
    console.log("Ejecución exitosa");

    db.conexion.sync().then(() =>{
    // consultarUserId()
    // consultarUsers()
    // updUser()
    // delUser()
    // consultarBootcampId()
    // consultarBootcamps()
    
    console.log('BD sincronizada')
})
