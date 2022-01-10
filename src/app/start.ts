import { CakesApi } from './CakesApi';

try {
    new CakesApi().start();
} catch (e) {
    console.log(e);
    process.exit(1);
}

process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
    process.exit(1);
});
