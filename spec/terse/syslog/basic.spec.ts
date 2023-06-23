import Callback from '../../../dist/terse/callback.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

let argument : any[] = [];

const callback = Callback<[string, number, boolean]>(function (severities : string, string : string, number: number, boolean : boolean) {

    argument = new Array(...arguments);
});

it('emergency', ()=>{
    const params : [string, number, boolean] = ['emergency', 1, true];
    callback.emerg(...params);
    expect(argument).toEqual(['EMERG', ...params]);
});

it('alert', ()=>{
    const params : [string, number, boolean] = ['alert', 2, false];
    callback.alert(...params);
    expect(argument).toEqual(['ALERT', ...params]);
});

it('critical', ()=>{
    const params : [string, number, boolean] = ['critical', 3, true];
    callback.crit(...params);
    expect(argument).toEqual(['CRIT', ...params]);
});

it('error', ()=>{
    const params : [string, number, boolean] = ['error', 4, false];
    callback.error(...params);
    expect(argument).toEqual(['ERROR', ...params]);
});

it('warning', ()=>{
    const params : [string, number, boolean] = ['warning', 5, true];
    callback.warning(...params);
    expect(argument).toEqual(['WARNING', ...params]);
});

it('notice', ()=>{
    const params : [string, number, boolean] = ['notice', 6, false];
    callback.notice(...params);
    expect(argument).toEqual(['NOTICE', ...params]);
});

it('informational', ()=>{
    const params : [string, number, boolean] = ['informational', 7, true];
    callback.info(...params);
    expect(argument).toEqual(['INFO', ...params]);
});

it('debug', ()=>{
    const params : [string, number, boolean] = ['debug', 8, false];
    callback.debug(...params);
    expect(argument).toEqual(['DEBUG', ...params]);
});

