import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';

x();

(async function () {
    async function loadPackages() {
        const require = createRequire(import.meta.url); function getDirectories(srcpath) {
            return fs.readdirSync(srcpath).filter(file => {
                return fs.statSync(path.join(srcpath, file)).isDirectory()
            })
        }
        if (fs.existsSync('./packages/index.js')) {
            require('./../packages/index.js')
        } else {
            await import('./../packages/index.mjs')
        }
    }
    await loadPackages();

    let successful = !0; for (let h of mp.events.getAllOf('packagesLoaded')) {
        try {
            h()
        }
        catch (e) {
            successful = !1;
        }
    }
    mp.events.remove('packagesLoaded');
    mp.events.initialized = !0
})()