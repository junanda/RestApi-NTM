interface DataStore {
    getAll(): any | Promise<any>;
    store(): any | Promise<any>;
    getOne(): any | Promise<any>;
    update(): any | Promise<any>;
    delete(): any | Promise<any>;

}

export default DataStore;