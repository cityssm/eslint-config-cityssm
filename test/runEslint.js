import { exec } from 'node:child_process';
const eslintCommand = 'eslint --config eslint.config.js --exit-on-fatal-error ./samples/*.ts';
console.log(`Running ${eslintCommand} ...`);
try {
    exec(eslintCommand, (error, stdout, stderr) => {
        if (stdout !== '') {
            console.log('\nSTDOUT');
            console.log(stdout);
        }
        if (stderr !== '') {
            console.log('\nSTDERR');
            console.log(stderr);
        }
        if (error === null) {
            console.log('❗ ESLint did not find any errors or warnings.');
            process.exitCode = 1;
        }
        else if (error.code === 2) {
            console.log('❗ Broken configuration.');
            process.exitCode = 1;
        }
        else {
            console.log('✔️ ESLint errors and warnings found. Config checked successfully.');
            process.exitCode = 0;
        }
    });
}
catch {
    console.log('❗ Error running ESLint.');
    process.exitCode = 1;
}
