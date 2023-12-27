import * as child_process from "child_process";
import CurrentDir from '@axiona/filesystem/string/current-dir.js';
const currentDir = CurrentDir(import.meta);


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it('main', (done)=>{

    child_process.exec(`node ${currentDir}/basic.js`, (error, stdout, stderr) => {

        if(error || stderr) {

            fail(error || stderr);
        }

        let parts = stdout.trim().split(/[\r\n]+/);
        let i = 0;

        expect(parts[i++]).toBe('{"key":"emergency","level":"EMERGENCY","message":"message emergency"}');
        expect(parts[i++]).toBe('{"key":"alert","level":"ALERT","message":"message alert"}');
        expect(parts[i++]).toBe('{"key":"critical","level":"CRITICAL","message":"message critical"}');
        expect(parts[i++]).toBe('{"key":"error","level":"ERROR","message":"message error"}');
        expect(parts[i++]).toBe('{"key":"warning","level":"WARNING","message":"message warning"}');
        expect(parts[i++]).toBe('{"key":"notice","level":"NOTICE","message":"message notice"}');
        expect(parts[i++]).toBe('{"key":"informational","level":"INFORMATIONAL","message":"message informational"}');
        expect(parts[i++]).toBe('{"key":"debug","level":"DEBUG","message":"message debug"}');

        done();
    });

});

it('terse', (done)=>{

    child_process.exec(`node ${currentDir}/basic-terse.js`, (error, stdout, stderr) => {

        if(error || stderr) {

            fail(error || stderr);
        }

        let parts = stdout.trim().split(/[\r\n]+/);
        let i = 0;

        expect(parts[i++]).toBe('{"key":"emergency","level":"EMERG","message":"message emergency"}');
        expect(parts[i++]).toBe('{"key":"alert","level":"ALERT","message":"message alert"}');
        expect(parts[i++]).toBe('{"key":"critical","level":"CRIT","message":"message critical"}');
        expect(parts[i++]).toBe('{"key":"error","level":"ERROR","message":"message error"}');
        expect(parts[i++]).toBe('{"key":"warning","level":"WARNING","message":"message warning"}');
        expect(parts[i++]).toBe('{"key":"notice","level":"NOTICE","message":"message notice"}');
        expect(parts[i++]).toBe('{"key":"informational","level":"INFO","message":"message informational"}');
        expect(parts[i++]).toBe('{"key":"debug","level":"DEBUG","message":"message debug"}');

        done();
    });

});

