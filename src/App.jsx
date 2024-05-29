import { useState } from 'react';
import './style.css';
import DynamicForm from './DynamicForm';


export default function App() {
  const [formType, setFormType] = useState('custom_form');

  return (
    <div>
      <h2>Dynamic Forms</h2>
      <button className='custom-form-cta' onClick={() => setFormType('custom_form')}>Custom</button>
      <button onClick={() => setFormType('inbuilt_form')}>In built</button>
      <DynamicForm  formType={formType}/>
    </div>
  );
}
