import React from 'react';
import Filme from './Filme';
const filmesEstilo = {
    border: '#F78B1F solid 2px',
    borderRadius: '5px',
    backgroundColor: '#E6E6E6',
    textAlign: 'Left',
    width: '500px',
    margin: 'auto',
    padding: '30px',
    };

function Filmes() { return (
<div style={filmesEstilo}>
<Filme />
</div>
);
}

export default Filmes;