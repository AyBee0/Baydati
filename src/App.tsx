import React, { useState } from 'react';
import './App.css';

import logo from './assets/logo.svg';
import translate from './translator';

function App() {
    const [engLetterText, setEngLetterText] = useState('Baydati');
    const [arLetterText, setArLetterText] = useState('بيضاتي')
    const englChanged = (text: string) => {
        setEngLetterText(text);
        setArLetterText(translate(text));
    }
    return (
        <div className="container-fluid App justify-content-center">
            <img src={logo} alt="" />
            <br />
            <label>Baydatak</label>
            <textarea value={engLetterText} onChange={(e) => englChanged(e.target.value)}></textarea>
            <br />
            <label>بيضاتي</label>
            <textarea value={arLetterText}></textarea>
        </div>
    );
}

export default App;
