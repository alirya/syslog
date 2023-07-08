import Callback from "../../dist/callback.js";
import Level from "../../dist/level/level.js";

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

let argument : any[] = [];

const callback = Callback<[string, number, boolean]>(function (severities : string, string : string, number: number, boolean : boolean) {

    argument = new Array(...arguments);

}, Level.ERROR);

it('emergency', ()=>{
    argument = [];
    const params : [string, number, boolean] = ['emergency', 1, true];
    callback.emergency(...params);
    expect(argument).toEqual(['EMERGENCY', ...params]);
});

it('alert', ()=>{
    argument = [];
    const params : [string, number, boolean] = ['alert', 2, false];
    callback.alert(...params);
    expect(argument).toEqual(['ALERT', ...params]);
});

it('critical', ()=>{
    argument = [];
    const params : [string, number, boolean] = ['critical', 3, true];
    callback.critical(...params);
    expect(argument).toEqual(['CRITICAL', ...params]);
});

it('error', ()=>{
    argument = [];
    const params : [string, number, boolean] = ['error', 4, false];
    callback.error(...params);
    expect(argument).toEqual(['ERROR', ...params]);
});

it('warning', ()=>{
    argument = [];
    const params : [string, number, boolean] = ['warning', 5, true];
    callback.warning(...params);
    expect(argument).toEqual([]);
});

it('notice', ()=>{
    argument = [];
    const params : [string, number, boolean] = ['notice', 6, false];
    callback.notice(...params);
    expect(argument).toEqual([]);
});

it('informational', ()=>{
    argument = [];
    const params : [string, number, boolean] = ['informational', 7, true];
    callback.informational(...params);
    expect(argument).toEqual([]);
});

it('debug', ()=>{
    argument = [];
    const params : [string, number, boolean] = ['debug', 8, false];
    callback.debug(...params);
    expect(argument).toEqual([]);
});

