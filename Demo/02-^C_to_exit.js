/*
 * @Author: gary.yuchenzhang 
 * @Date: 2018-04-17 11:05:54 
 * @Last Modified by: gary.yuchenzhang
 * @Last Modified time: 2018-04-17 14:10:43
 */

setInterval(function () {
    console.log(1);
}, 1000);

// Double press ^C to exit
// let keypress = require('tty');
let exiting = false;

process.on('keypress', (key) => {
    if (key && key.ctrl && key.name == 'c') {
        if (exiting) {
            console.log("Exit");
            process.exit();
        } else {
            console.log("First press on C, press C again to exit.");
            exiting = true;

            setTimeout(() => {
                exiting = false;
            }, 1000);
        }

    }
    // if (exiting) {
    //     // Terminate process
    //     console.log('Exit');
    //     process.exit();
    // } else {
    //     console.log('First press on ^C');
    //     exiting = true;

    //     setTimeout(() => {
    //         exiting = false;
    //     }, 1000);
    // }
});