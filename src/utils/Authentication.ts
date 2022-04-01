import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


class Authentication {
    public static passHash = async(password:string): Promise<string> => {
        return await bcrypt.hash(password, 10)
    }

    public static passCheck = async(text:string, encryptText:string): Promise<boolean> => {
        const result = await bcrypt.compare(text, encryptText)
        return result
    }

    public static generateToken = (id:number, username:string, role:string):string => {
        const secret:string = process.env.JWT_SECRET_KEY || "mapsecret12type";
        const token:string = jwt.sign({id, username, role}, secret, {expiresIn: "1800s"})
        return token
    }
}

export default Authentication;