import bcrypt from 'bcrypt'


class Authentication {
    public static passHash = async(password:string): Promise<string> => {
        return await bcrypt.hash(password, 10)
    }

    public static passCheck = async(text:string, encryptText:string): Promise<boolean> => {
        const result = await bcrypt.compare(text, encryptText)
        return result
    }
}

export default Authentication;