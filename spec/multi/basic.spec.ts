import Callback from '../../dist/callback.js';
import Multi from "../../dist/multi.js";

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

let argument1 : any[] = [];

const terse = Callback<[string, number, boolean]>(function (severities : string, string : string, number: number, boolean : boolean) {

    argument1 = new Array(...arguments);
});

let argument2 : any[] = [];

const syslog = Callback<[string, number, boolean]>(function (severities : string, string : string, number: number, boolean : boolean) {

    argument2 = new Array(...arguments);
});

const callback = Multi([terse, syslog]);

it('emergency', ()=>{
    const params : [string, number, boolean] = ['emergency', 1, true];
    callback.emergency(...params);
    expect(argument1).toEqual(['EMERGENCY', ...params]);
    expect(argument2).toEqual(['EMERGENCY', ...params]);
});

it('alert', ()=>{
    const params : [string, number, boolean] = ['alert', 2, false];
    callback.alert(...params);
    expect(argument1).toEqual(['ALERT', ...params]);
    expect(argument2).toEqual(['ALERT', ...params]);
});

it('critical', ()=>{
    const params : [string, number, boolean] = ['critical', 3, true];
    callback.critical(...params);
    expect(argument1).toEqual(['CRITICAL', ...params]);
    expect(argument2).toEqual(['CRITICAL', ...params]);
});

it('error', ()=>{
    const params : [string, number, boolean] = ['error', 4, false];
    callback.error(...params);
    expect(argument1).toEqual(['ERROR', ...params]);
    expect(argument2).toEqual(['ERROR', ...params]);
});

it('warning', ()=>{
    const params : [string, number, boolean] = ['warning', 5, true];
    callback.warning(...params);
    expect(argument1).toEqual(['WARNING', ...params]);
    expect(argument2).toEqual(['WARNING', ...params]);
});

it('notice', ()=>{
    const params : [string, number, boolean] = ['notice', 6, false];
    callback.notice(...params);
    expect(argument1).toEqual(['NOTICE', ...params]);
    expect(argument2).toEqual(['NOTICE', ...params]);
});

it('informational', ()=>{
    const params : [string, number, boolean] = ['informational', 7, true];
    callback.informational(...params);
    expect(argument1).toEqual(['INFORMATIONAL', ...params]);
    expect(argument2).toEqual(['INFORMATIONAL', ...params]);
});

it('debug', ()=>{
    const params : [string, number, boolean] = ['debug', 8, false];
    callback.debug(...params);
    expect(argument1).toEqual(['DEBUG', ...params]);
    expect(argument2).toEqual(['DEBUG', ...params]);
});

