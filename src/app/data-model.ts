import {DATA_TYPE, ITable, IDataBase} from 'jsstore';

export class User {
    id: number;
    name: string = '';
    email: string = '';
    password: string = '';
    admin: boolean = false;
}

const tblUser: ITable = {
    name: 'Person',
    columns: [
      {
          name: 'Id',
          primaryKey: true,
          autoIncrement: true
      },
      {
        name: 'name',
        notNull: true,
        dataType: DATA_TYPE.String
      }, 
      {
        name: 'email',
        notNull: true,
        dataType: DATA_TYPE.String,
        unique: true
      },
      {
        name: 'password',
        notNull: true,
        dataType: DATA_TYPE.String
      },  
      {
          name: 'admin',
          notNull: true,
          dataType: DATA_TYPE.Boolean
      }
    ]
};

export const databaseUser: IDataBase = {
    
        name: 'Person',
        tables: [tblUser]
}

