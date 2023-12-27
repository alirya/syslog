import * as child_process from "child_process";
import CurrentDir from '@axiona/filesystem/string/current-dir.js';
const currentDir = CurrentDir(import.meta);


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it('emergency', (done)=>{

    child_process.exec(`node ${currentDir}/basic.js`, (error, stdout, stderr) => {

        if(error || stderr) {

            fail(error || stderr);
        }

        const parts = stdout.trim().split(/[\r\n]+/mi);
        let i = 0;

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mEMERGENCY\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage emergency\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "emergency"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mALERT\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage alert\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "alert"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mCRITICAL\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage critical\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "critical"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mERROR\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage error\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "error"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mWARNING\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage warning\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "warning"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mNOTICE\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage notice\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "notice"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mINFORMATIONAL\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage informational\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "informational"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mDEBUG\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage debug\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "debug"');
        expect(parts[i++]).toBe('    }');

        done();
    });
});


it('emergency', (done)=>{

    child_process.exec(`node ${currentDir}/basic-terse.js`, (error, stdout, stderr) => {

        if(error || stderr) {

            fail(error || stderr);
        }

        const parts = stdout.trim().split(/[\r\n]+/mi);
        let i = 0;

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mEMERG\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage emergency\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "emergency"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mALERT\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage alert\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "alert"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mCRIT\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage critical\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "critical"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mERROR\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage error\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "error"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mWARNING\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage warning\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "warning"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mNOTICE\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage notice\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "notice"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mINFO\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage informational\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "informational"');
        expect(parts[i++]).toBe('    }');

        expect(parts[i++]).toMatch(/\[[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\] \x1B\[37mDEBUG\x1B\[39m \([0-9]{4,5}\): \x1B\[36mmessage debug\x1B\[39m/);
        expect(parts[i++]).toBe('    0: {');
        expect(parts[i++]).toBe('      "key": "debug"');
        expect(parts[i++]).toBe('    }');

        done();
    });
});

