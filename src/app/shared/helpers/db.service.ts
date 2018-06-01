import { Injectable } from '@angular/core';
import { IDataBase, Instance } from 'jsstore';
import * as JsStore from 'jsstore';
import * as workerPath from "file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js";


@Injectable({
  providedIn: 'root'
})
export class DbService {

  connection: Instance;

  constructor() {
    this.connection = new JsStore.Instance(new Worker(workerPath));
  }

  initDatabase(database: IDataBase) {
    this.connection.isDbExist(database.name).then((exist: boolean) => {
      if (exist) {
        this.connection.openDb(database.name);
      }
      else {
        this.connection.createDb(database);
      }
    }).catch((err) => {
      console.error(err);
    });
  }
  
  getAll(database: IDataBase): Promise<any> {
    return this.connection.select<any>({
      from: database.name
    });
  }

  insert(database: IDataBase, values: object): Promise<any> {
    return this.connection.insert({
      into: database.name,
      values: [values]
    });
  }

  remove(database: IDataBase, where: object): Promise<any> {
    return this.connection.remove({
      from: database.name,
      where
    });
  }

  select(database: IDataBase, where: object): Promise<any> {
    return this.connection.select<any>({
      from: database.name,
      where
    });
  }

  update(database: IDataBase, set: object, where: object): Promise<any> {
    return this.connection.update({
      in: database.name,
      set,
      where
    });
  }

}
