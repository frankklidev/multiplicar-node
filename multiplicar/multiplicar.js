
const fs = require('fs');
const colors = require('colors');

    let listarTabla = (base,limite)=>{

      console.log(`=========================`.green)
      console.log(`table de ${base}`.green)
      console.log(`=========================`.green)
      for (let index = 0; index <= limite; index++) {
        let data = ''; 
        data += `${base} * ${index} = ${base*index} \n`;
        console.log(data)
      }
    }


    let crearArchivo = (base,limite)=>{
  
      return new Promise((resolve,reject)=>{
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es valido`);
            return;
        }
        let data = '';       
        for (let index = 0; index <= limite; index++) {     
             data += `${base} * ${index} = ${base*index} \n`;
           }      
        fs.writeFile(`tablas/tabla-${base}.txt`,data,(err)=>{
           if (err) 
             reject(err)
             else
            resolve(`tabla-${base}.txt `)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla 
}
