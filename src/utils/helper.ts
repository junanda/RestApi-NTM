export const responseSerialize = (data:any, status: number, success: boolean): any => {
    const message = {
        success: success,
        status: status || 200,
        body: data
    }

    return message
}

export const failNotFound = (msg:string, status:number):Object => {
    return {
        success: false,
        status: status || 404,
        message: msg
    }
}