import React from 'react';
import styled from 'styled-components';

const Paragrafo = styled.h1`
    align-items: center;
    display: flex;
    justify-content: center;
    mn-height: 100vh;
    margin: 100 50;
    padding: 30 30; 
    
    font-size: 1.5em;
    text-align: center;
    color: #7d40e7;
`;

const Loading = () => {
    return(
        <div >
            
         <Paragrafo> 
             <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            Loading . . . 
        </Paragrafo>
        </div>
    );
}; export default Loading;