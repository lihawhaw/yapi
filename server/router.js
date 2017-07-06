import koaRouter from 'koa-router'
import interfaceController from './controllers/interface.js'
import groupController from './controllers/group.js'
import userController from './controllers/user.js'

const router = koaRouter();

const INTERFACE_CONFIG = {
    interface: {
        prefix: '/interface/',
        controller: interfaceController
    },
    user: {
        prefix: '/user/',
        controller: userController
    },
    group: {
        prefix: '/group/',
        controller: groupController
    }
};

//group
createAction('group', 'list', 'get', 'list')
createAction('group', 'add', 'post', 'add')
createAction('group', 'up', 'post', 'up')
createAction('group', 'del', 'post', 'del')

//user
createAction('user', 'login', 'post', 'login')
createAction('user', 'reg', 'post', 'reg')
createAction('user', 'list', 'get', 'list')
createAction('user', 'getUser', 'get', 'getUser')
createAction('user', 'update', 'post', 'update')
createAction('user', 'del', 'post', 'del')


/**
 * 
 * @param {*} controller controller_name
 * @param {*} path  request_path
 * @param {*} method request_method , post get put delete ...
 * @param {*} action controller_action_name
 */
function createAction(controller, path, method, action){
    router[method](INTERFACE_CONFIG[controller].prefix + path, async (ctx) => {
        let inst = new INTERFACE_CONFIG[controller].controller(ctx);
        await inst[action].call(inst, ctx);
    })
}      

module.exports = router
