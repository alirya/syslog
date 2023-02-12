import Default from '../../../dist/winston-yaml/replacer/default.js';


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


class Parent {

    type  = 'parent';

    constructor(public children : Children) {

        children.parent = this;
    }
}

class Children {

    type  = 'children';
    buffer: Buffer = Buffer.from('abc');

    constructor(public parent ?: Parent) {
    }

}


it('test', () => {

    const object = Default()(new Parent(new Children())).value;

    expect(object).toEqual({
            children: {
                parent: '<reference Parent>',
                type: 'children',
                buffer: '<Buffer length:3>'
            },
            type: 'parent'
        }
    );

})


