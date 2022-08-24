const {argv} = require('./config/yargs');

const colors = require('colors');


const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

console.log(argv._[0])
 let comando = argv._[0];

switch (comando) {
   case 'listar':
      listarTabla(argv.base,argv.limite)
      break;
   
   case 'crear':
      crearArchivo(argv.base, argv.limite)
      .then(archivo =>console.log(`se creo ${archivo.green}`))
      .catch(err=>console.log(err));
      break;

   default:
      console.log('Comando no Reconocido');
}
//console.log(argv.base);

// let parametro = argv[2]
// let base = parametro.split('=')[1];


