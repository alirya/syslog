import TerseCallback from '../../dist/terse/callback';
import FromTerse from '../../dist/from-terse';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it('basic', () => {

    let terse = new TerseCallback<[string, number, boolean]>(()=>undefined);
    let callback = new FromTerse(terse);

    callback.emergency('string', 1, true);
    callback.alert('string', 1, true);
    callback.critical('string', 1, true);
    callback.error('string', 1, true);
    callback.warning('string', 1, true);
    callback.notice('string', 1, true);
    callback.informational('string', 1, true);
    callback.debug('string', 1, true);
});
