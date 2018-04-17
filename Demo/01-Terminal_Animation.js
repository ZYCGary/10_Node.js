/*
 * @Author: gary.yuchenzhang 
 * @Date: 2018-04-17 10:56:54 
 * @Last Modified by:   gary.yuchenzhang 
 * @Last Modified time: 2018-04-17 10:56:54 
 */

// Animate output by 'stdout'

// Set fps
let fps = 60;

// Set pics (each frame is an fps)
let frames = [];
frames[frames.length] = '<(￣︶￣)>';
frames[frames.length] = '[]~(￣▽￣)~*';
frames[frames.length] = ' (￣ε(#￣)';
frames[frames.length] = '(=￣ω￣=)';

// Clear terminal, output a new frame
let current = 0;
let fff = 0;
let render = () => {
    // Clear terminal
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

    if (current === frames.length) {
        current = 0;
    }

    process.stdout.write(frames[current++]);
};

// Show
setInterval(render, 1000 / fps);