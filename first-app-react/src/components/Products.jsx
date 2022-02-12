import React from 'react'; 
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from  '../images/s2.png';
import pimage3 from  '../images/s3.png';

function Products()  {
    return (
        <div id='products'>
            <h1> <span>CHOOSE</span> & ENJOY </h1>
            <p> Un pain moelleux avec éclats de maïs, une sauce épicée façon cajun, des oignons croustillants, des tranches de bacon, des tranches de cheddar fondu et un irrésistible poulet pané croustillant !</p>
            <div className='a-container'>
            <Productbox image = {pimage1} title="Luger Burger" />
            <Productbox image = {pimage2} title=" Burger" />
            <Productbox image = {pimage3} title="Luger Burger" />
            </div>
        </div>
    );
}

export default Products;
