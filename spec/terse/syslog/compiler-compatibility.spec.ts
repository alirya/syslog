import Callback from '../../../dist/terse/callback.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it('basic', () => {

    let callback = new Callback<[string, number, boolean]>(()=>undefined);

    callback.emerg('string', 1, true);
    callback.alert('string', 1, true);
    callback.crit('string', 1, true);
    callback.error('string', 1, true);
    callback.warning('string', 1, true);
    callback.notice('string', 1, true);
    callback.info('string', 1, true);
    callback.debug('string', 1, true);
});
