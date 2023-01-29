"use strict";
let _data = new Map();
let Debug = false;
let methods = require('./methods');

class Container {
    static SetClient(id, key, value, isInt = false) {
        //WixCore.Debug.Server('Container.SetClient', id, key, value, isInt);
        try {

            if (isInt)
                value = methods.parseFloat(value);

            if (Debug) {
                WixCore.Debug.Server(`SRV: [SET-CLIENT-SRV] ID: ${id}, KEY: ${key}, OBJECT: ${value}`);
            }
            this.Set(id, key, value);
        } catch(e) {
            WixCore.Debug.Server(`SRV: [SET-CLIENT-SRV] ERR: ${e}`);
        }
    }

    static SetGroupClient(json) {
        //WixCore.Debug.Server('Container.SetGroupClient', json);
        try {
            let data = JSON.parse(json);
            data.forEach(item => {
                this.SetClient(item.id, item.key, item.value, item.isInt);
            })

        } catch(e) {
            WixCore.Debug.Server(`SRV: [SET-CLIENT-SRV] ERR: ${e}`);
        }
    }

    static Set(id, key, value) {
        //WixCore.Debug.Server('Container.Set');
        id = methods.parseInt(id);
        try {
            if (_data.has(id) && _data.get(id) !== undefined && _data.get(id) !== null) {
                _data.set(id, _data.get(id).set(key, value));
            } else {
                _data.set(id, new Map().set(key, value));
            }
            if (Debug) {
                WixCore.Debug.Server(`SRV: [SET] ID: ${id}, KEY: ${key}, OBJECT: ${value}`);
            }
        } catch (e) {
            WixCore.Debug.Server(`SRV: [SET] ERR: ${e}`);
        }
    }

    static Reset(id, key){
        WixCore.Debug.Server('Container.Reset');
        id = methods.parseInt(id);
        try {
            if (!_data.has(id)) return;
            if (!_data.get(id).has(key)) return;
            _data.get(id).delete(key);
            if (Debug) {
                WixCore.Debug.Server(`SRV: [RESET] ID: ${id}, KEY: ${key}`);
            }
        } catch (e) {
            WixCore.Debug.Server(`SRV: [RESET] ERR: ${e}`);
        }
    }

    static ResetAll(id){
        WixCore.Debug.Server('Container.ResetAll');
        id = methods.parseInt(id);
        try {
            if (!_data.has(id)) return;
            _data.delete(id);
            if (Debug) {
                WixCore.Debug.Server(`SRV: [RESETALL] ID: ${id}, KEY: ${key}`);
            }
        } catch (e) {
            WixCore.Debug.Server(`SRV: [RESETALL] ERR: ${e}`);
        }
    }

    static Get(id, key) {
        //WixCore.Debug.Server('Container.Get');
        id = methods.parseInt(id);
        try {
            if (Debug) {
                WixCore.Debug.Server(`SRV: [GET] ID: ${id}, KEY: ${key}`);
            }
            if (_data.has(id)) {
                if (_data.get(id).has(key)) {
                    return _data.get(id).get(key);
                }
            }
            return null;
        } catch (e) {
            WixCore.Debug.Server(`SRV: [GET] ERR: ${e}`);
        }
    }

    static Has(id, key) {
        //WixCore.Debug.Server('Container.Has');
        id = methods.parseInt(id);
        try {
            if (Debug) {
                WixCore.Debug.Server(`SRV: [HAS] ID: ${id}, KEY: ${key}`);
            }
            if (_data.has(id)) {
                return _data.get(id).has(key);
            } else {
                return false;
            }
        } catch (e) {
            WixCore.Debug.Server(`SRV: [HAS] ERR: ${e}`);
        }
    }

    static GetAll(id) {
        //WixCore.Debug.Server('Container.GetAll');
        id = methods.parseInt(id);
        try {
            if (Debug) {
                WixCore.Debug.Server(`SRV: [GETALL] ID: ${id}, KEY: ${_data.get(id)}`);
            }
            if (!_data.has(id)) {
                return null;
            }
            if(_data.get(id) == undefined) return null;
            return _data.get(id);
        } catch (e) {
            WixCore.Debug.Server(`SRV: [GETALL] ERR: ${e}`);
        }
    }

    static GetAllClient(player, promiseId, id) {
        //WixCore.Debug.Server('Container.GetAllClient');
        try {
            if (Debug) {
                WixCore.Debug.Server(`SRV: [GET ALL CLIENT] ID: ${id}`);
            }
            player.call('modules:client:data:GetAll', [promiseId, Array.from(this.GetAll(id))]);
        } catch (e) {
            player.call('modules:client:data:GetAll', [promiseId, null]);
            WixCore.Debug.Server(`SRV: [GET ALL CLIENT] ERR: ${e}`);
        }
    }

    static GetClient(player, promiseId, id, key) {
        //WixCore.Debug.Server('Container.GetClient');
        try {
            if (Debug) {
                WixCore.Debug.Server(`SRV: [GETCLIENT] ID: ${id}, KEY: ${key}`);
            }
            player.call('modules:client:data:Get', [promiseId, this.Get(id, key)]);
        } catch (e) {
            player.call('modules:client:data:Get', [promiseId, null]);
            WixCore.Debug.Server(`SRV: [GETCLIENT] ERR: ${e}`);
        }
    }

    static HasClient(player, promiseId, id, key) {
        //WixCore.Debug.Server('Container.HasClient');
        try {
            if (Debug) {
                WixCore.Debug.Server(`SRV: [HASCLIENT] ID: ${id}, KEY: ${key}`);
            }
            player.call('modules:client:data:Has', [promiseId, this.Has(id, key)]);
        } catch (e) {
            WixCore.Debug.Server(`SRV: [HASCLIENT] ERR: ${e}`);
        }
    }
}

exports.Data = Container;