import * as child_process from "child_process";
import CurrentDir from '@alirya/filesystem/string/current-dir.js';
const currentDir = CurrentDir(import.meta);


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it('main', (done)=>{

    child_process.exec(`node ${currentDir}/basic.js`, (error, stdout, stderr) => {

        let parts = stdout.trim().split(/[\r\n]+/);
        let i = 0;

        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 EMERGENCY: message emergency/);
        expect(parts[i++]).toBe('- key: emergency');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 ALERT {2}: message alert/);
        expect(parts[i++]).toBe('- key: alert');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 CRITICAL: message critical/);
        expect(parts[i++]).toBe('- key: critical');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 ERROR {2}: message error/);
        expect(parts[i++]).toBe('- key: error');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 WARNING: message warning/);
        expect(parts[i++]).toBe('- key: warning');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 NOTICE : message notice/);
        expect(parts[i++]).toBe('- key: notice');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 INFORMATIONAL: message informational/);
        expect(parts[i++]).toBe('- key: informational');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 DEBUG {2}: message debug/);
        expect(parts[i++]).toBe('- key: debug');

        done();
    });

});

it('terse', (done)=>{

    child_process.exec(`node ${currentDir}/basic-terse.js`, (error, stdout, stderr) => {

        let parts = stdout.trim().split(/[\r\n]+/);
        let i = 0;

        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 EMERG {2}: message emergency/);
        expect(parts[i++]).toBe('- key: emergency');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 ALERT {2}: message alert/);
        expect(parts[i++]).toBe('- key: alert');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 CRIT {3}: message critical/);
        expect(parts[i++]).toBe('- key: critical');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 ERROR {2}: message error/);
        expect(parts[i++]).toBe('- key: error');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 WARNING: message warning/);
        expect(parts[i++]).toBe('- key: warning');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 NOTICE : message notice/);
        expect(parts[i++]).toBe('- key: notice');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 INFO {3}: message informational/);
        expect(parts[i++]).toBe('- key: informational');
        expect(parts[i++]).toMatch(/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}-[0-9]{2}-[0-9]{2}\+0000 DEBUG {2}: message debug/);
        expect(parts[i++]).toBe('- key: debug');


        done();
    });

});
