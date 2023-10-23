import { Md5 } from 'ts-md5'


function _typeof(obj: any): string {
    let tpe = typeof (obj)
    if (tpe === "object") {
        if (Array.isArray(obj)) {
            return "array"
        }
    }
    return tpe
}

function isEmpty(obj: any): boolean {
    if (obj == null) return true;

    switch (_typeof(obj)) {
        case "number":
        case "boolean":
            return false
        case "string":
        case "array":
            return obj.length <= 0;
        case "object":
            return Object.keys(obj).length === 0;
        case "undefined":
        default:
            return true;
    }
}

/**
 * * 根据用户信息和请求信息生成验证串
 * @param method 请求的 HTTP Method
 * @param uri 请求的 URI
 * @param dataLength 请求 Body 的长度
 * @returns {string} 验证串
 * @param username 用户名
 * @param password 密码
 * @param department 部门
 * @param role 角色
 * @returns {string} 验证串
 */
function token(method: string, uri: string, dataLength: number, username: string, password: string, department: string, role: string) {
    const ts = new Date().getTime();
    const message = [method.toLowerCase(), uri, dataLength, password].join('#');
    const sign = Md5.hashStr(message);
    const client = [username, department, role].join('#');
    const base64Client = window.btoa(client);
    const tok = [sign, ts, base64Client].join(':');

    // console.log("in token");

    // console.log("===============");
    // console.log("message:", message);
    // console.log("method:", method.toLowerCase());
    // console.log("uri:", uri);
    // console.log("dataLength:", dataLength);
    // console.log("username:", username);
    // console.log("password", password);
    // console.log("md5:", sign);
    //
    // console.log("ts:", ts);
    // console.log("sign:", sign);
    // console.log("client", client);
    // console.log("base64Client", base64Client);
    //
    // console.log("tok:", tok);
    return tok;
}

export { isEmpty, token }