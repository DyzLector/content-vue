#!/usr/bin/env node

// eslint-disable-next-line no-undef
const argv = process.argv.slice(2); 
//console.log(argv);

const usage = `
Usage: content-vue-cli <args>

args;
--version          ; Prints version information
--build <path>     ; Build the current applictation for a <path> that 
                     contains a content-vue.config.json

`;

let command = argv[0] || 'usage';
let value = command && argv[1] ? argv[1]: '';

//console.log('C:' + command)
//console.log('V:' + value);

if (command === 'usage') {
    console.log(usage);
} else if (command === '--version') {
    console.log('TODO: get and print version information');
} else if (command === '--build') {
    if (!value) {
        value = '.';
    }
    console.log('TODO: handle build: ' + value);
}
