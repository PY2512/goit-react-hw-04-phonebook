import { useState } from 'react';
import style from './contactForm.module.css'



function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = ({ currentTarget: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
        
            case 'number':
                setNumber(value);
                break;
        
            default:
                return;
        }
    };

    const handleBtnSubmit = event => {
        event.preventDefault();
        onSubmit(name, number);
        reset();
    };

    const reset = () => {
        setNumber('');
        setName('');
    };

    return (
        <form 
        onSubmit={handleBtnSubmit}
        className={style.form}
        autoComplete="of">
            <label className={style.label}>Name
            <input
            autoFocus
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className={style.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
            >
            </input>
            </label>
            <label className={style.label}>Number
            <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            className={style.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
            >
            </input>
            </label>
            <button type="submit" className={style.btn}>Add contact</button>
        </form>
    );
};

export default ContactForm;