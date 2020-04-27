const toDoList = require('../model/toDoList');

const listAll = async (ctx) => {
    const data = await toDoList.findAll();
    ctx.body = {
        code: 1000,
        data
    }
};

const create = async (ctx) => {
    const params = ctx.request.body;
    if (!params.user) {
        ctx.body = {
            code: 1003,
            desc: '用户不能为空'
        };
        return false
    }
    try {
        await toDoList.create(params)
        ctx.body = {
            code: 1000,
            data: '创建成功'
        }
    }
    catch(err) {
        const msg = err.errors[0]
        ctx.body = {
            code: 300,
            data: msg.value + msg.message
        }
    }
};
const destroy = async ctx => {
    await toDoList.destroy({where: ctx.request.body});
    ctx.body = {
        code: 1000,
        desc: '删除成功'
    }
};
const update = async ctx => {
    const {key, todoState} = ctx.request.body;
    const data = await toDoList.update({todoState},{where: {key}});
    ctx.body = {
        code: 1000,
        data,
        desc: '修改成功'
    }
};
module.exports = {
    create,
    listAll,
    destroy,
    update
};
