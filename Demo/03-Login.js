/*
 * @Author: gary.yuchenzhang 
 * @Date: 2018-04-17 14:20:52 
 * @Last Modified by: gary.yuchenzhang
 * @Last Modified time: 2018-04-18 10:36:26
 */

/* process.stdin()

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`data: ${chunk}`);
    }
}); */
const ACCOUNT = 'Account: ';
const PWD = 'Password: ';
let isAccount = true;
let users = {
    'admin': '123',
    'user1': '321',
    'user2': '213'
}
let userName = '';

process.stdout.write(ACCOUNT);

process.stdin.on('data', (input) => {
    // The type of @input is Object(Stram)
    // Trim the 'enter' at the end of @input
    input = input.toString().trim();

    if (isAccount) {
        // Get keys in @users
        if (Object.keys(users).indexOf(input) !== -1) {
            // console.log('The user exit.');
            isAccount = false;
            userName = input;
            process.stdout.write(PWD);
        } else {
            console.log('The user does not exit.');
            process.stdout.write(ACCOUNT);
        }
    } else {
        let pwd = users[userName];
        // Password check
        if (input == pwd) {
            console.log('Login succeed!');
            process.exit();
        } else {
            console.log('Incorrect password.')
            process.stdout.write(PWD);
        }
    }
})