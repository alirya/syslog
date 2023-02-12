import VerboseCallback from '../../../dist/callback.js';
import FromVerbose from '../../../dist/terse/from-verbose.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it('basic', () => {

    const terse = new VerboseCallback<[string, number, boolean]>(()=>undefined);
    const callback = new FromVerbose(terse);

    callback.emerg('string', 1, true);
    callback.alert('string', 1, true);
    callback.crit('string', 1, true);
    callback.error('string', 1, true);
    callback.warning('string', 1, true);
    callback.notice('string', 1, true);
    callback.info('string', 1, true);
    callback.debug('string', 1, true);
});
