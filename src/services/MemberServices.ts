import { Request } from 'express'
import DataStore from '../datastore/DSInterface';
import Authentication from '../utils/Authentication';

const db = require('../db/models')


class MemberService implements DataStore{
    body: Request['body']
    params: Request['params']

    constructor(req: Request){
        this.body = req.body
        this.params = req.params
    }

    getAll = async () => {
        const data = await db.member.findAll({
            attributes: ['id', 'name', 'username', 'role']
        })
        return data
    }

    store = async () => {
        const {name, username, password, role} = this.body
        const passHash = await Authentication.passHash(password)

        const stored = await db.member.create({
            name: name, 
            username: username, 
            password: passHash, 
            role: role
        })

        return stored
    }

    getOne = async () => {
        const { id } = this.params
        const data = await db.member.findOne({
            where: {id: id}
        })

        return data
    }

    update = async () => {
        const { id } = this.params
        const { name, username, role } = this.body

        const up_data = await db.member.update({
            name: name,
            username: username,
            role: role
        }, {
            where: {
                id: id
            }
        })

        return up_data
    }

    delete = async () => {
        const {id} = this.params
        const del_data = await db.member.destroy({
            where: {id: id}
        })
        
        return del_data
    }

    getRoleUser = async () => {
        const {role} = this.params
        const data = await db.member.findAll({
            where: {role: role},
            attributes: ['id', 'name', 'username', 'role']
        })

        return data
    }

    checkUsername = async (username:string) => {
        const user = await db.member.findOne({
            where: {username}
        })

        return user
    }

}

export default MemberService;