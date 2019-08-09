/**
 * Created by charlie on 11/5/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ElfApp from './ElfApp';

window.onload = function () {
    ReactDOM.render(
        <div>
            <ElfApp/>
        </div>,
        document.getElementById('root')
    );

};

