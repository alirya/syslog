import Callback from '../../dist/callback';


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


let argument : any[] = [];

let callback = new Callback<[string, number, boolean]>(function (severities : string, string : string, number: number, boolean : boolean) {

    argument = new Array(...arguments);
});

it('emergency', ()=>{
    let params : [string, number, boolean] = ['emergency', 1, true];
    callback.emergency(...params);
    expect(argument).toEqual(['emergency', ...params]);
});

it('alert', ()=>{
    let params : [string, number, boolean] = ['alert', 2, false];
    callback.alert(...params);
    expect(argument).toEqual(['alert', ...params]);
});

it('critical', ()=>{
    let params : [string, number, boolean] = ['critical', 3, true];
    callback.critical(...params);
    expect(argument).toEqual(['critical', ...params]);
});

it('error', ()=>{
    let params : [string, number, boolean] = ['error', 4, false];
    callback.error(...params);
    expect(argument).toEqual(['error', ...params]);
});

it('warning', ()=>{
    let params : [string, number, boolean] = ['warning', 5, true];
    callback.warning(...params);
    expect(argument).toEqual(['warning', ...params]);
});

it('notice', ()=>{
    let params : [string, number, boolean] = ['notice', 6, false];
    callback.notice(...params);
    expect(argument).toEqual(['notice', ...params]);
});

it('informational', ()=>{
    let params : [string, number, boolean] = ['informational', 7, true];
    callback.informational(...params);
    expect(argument).toEqual(['informational', ...params]);
});

it('debug', ()=>{
    let params : [string, number, boolean] = ['debug', 8, false];
    callback.debug(...params);
    expect(argument).toEqual(['debug', ...params]);
});

