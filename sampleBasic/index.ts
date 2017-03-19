import * as b from 'bobril';
import { createButton } from './components/button';

b.init(() => {    

    return [

        { tag: 'h1', children: 'Hello World!' },

        createButton({
            title: 'Click Me!',
            onClick: () => {

            }
        })

    ];
});