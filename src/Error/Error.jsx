import React from 'react';

const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>Opps, the page you are looking for does not exist.</h3>
            <p>Feel free to shoot us a email at 
                <span> <a href={`mailto:rescuePrjHumane-tech@placeholder.com`}>rescuePrjHumane-tech@placeholder.com</a> </span> 
                if you think something is broken.</p>
            <a href="/petlist"><button type="button">Pets Available for Adoption</button></a>
        </div>
    )
}

export default Error
