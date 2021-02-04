import { createConnection } from 'typeorm';

//procura na raiz do projeto as configurações do ormconfig
createConnection().then(() => { 
    console.log("Successfully connected with database") 
});