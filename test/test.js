/* eslint-disable no-multi-spaces */
import './missing';
export async function test_fn(varName) {
    // This files has purposely formatted badly to ensure the 
    // ESLint configuration is loading correctly. 
    var VAR = /[0-9\d]/g;
    return varName + 'test' + ' ' + 2;
}
let tst = `test`;
async function promiseTst(param1, param2, param3, param4, param5, param6) {
    return new Promise(function (resolve, reject) {
        for (let i = 1; i <= 1; i++) {
            //
        }
        if (1 == 1)
            return 'test' + 'test' + 'test' + 'test' + 'test';
        return 'test' | 'test';
    }).then((val) => {
    });
}
