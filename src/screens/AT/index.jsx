import { Link, useNavigate } from "react-router-dom";

import Button from '../../components/button';

export default function AT() {

  const navigate = useNavigate();

  return (
    <div className='questions'>
      <h1>AT</h1>
      <ul>
        <li><Link to={'/AT/01'}>Exercício 01</Link></li>
        <li><Link to={'/AT/02'}>Exercício 02</Link></li>
        <li><Link to={'/AT/03'}>Exercício 03</Link></li>
        <li><Link to={'/AT/04'}>Exercício 04</Link></li>
        <li><Link to={'/AT/05'}>Exercício 05</Link></li>
        <li><Link to={'/AT/06'}>Exercício 06</Link></li>
        <li><Link to={'/AT/07'}>Exercício 07</Link></li>
        <li><Link to={'/AT/08'}>Exercício 08</Link></li>
        <li><Link to={'/AT/09'}>Exercício 09</Link></li>
        <li><Link to={'/AT/10'}>Exercício 10</Link></li>
        <li><Link to={'/AT/11'}>Exercício 11</Link></li>
        <li><Link to={'/AT/12'}>Exercício 12</Link></li>
        <li><Link to={'/AT/13'}>Exercício 13</Link></li>
        <li><Link to={'/AT/14'}>Exercício 14</Link></li>
        <li><Link to={'/AT/15'}>Exercício 15</Link></li>
        <li><Link to={'/AT/16'}>Exercício 16</Link></li>
      </ul>

      <Button title={'Voltar'} action={() => navigate(-1)}/>
        
    </div>
  );
};