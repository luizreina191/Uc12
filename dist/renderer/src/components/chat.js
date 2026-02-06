import React, { useEffect, useRef, useState } from 'react';
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const messagesEndRef = useRef(null);
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue]);
            setInputValue('');
            setConfirmation('Mensagem enviada com sucesso!');
            setTimeout(() => setConfirmation(''), 3000); // Remove a mensagem após 3 segundos
        }
    };
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    return (<div style={{ maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Bem-vindo ao Chat!</h2>
      <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            height: '300px',
            overflowY: 'auto',
            backgroundColor: '#f9f9f9',
        }}>
        {messages.map((message, index) => (<p key={index} style={{ margin: '5px 0', padding: '5px', backgroundColor: '#e6e6e6', borderRadius: '5px' }}>
            {message}
          </p>))}
        <div ref={messagesEndRef}/>
      </div>
      <form onSubmit={handleSendMessage} style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Digite sua mensagem aqui..." style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}/>
        <button type="submit" style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        }}>
          Enviar
        </button>
      </form>
      {confirmation && <p style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>{confirmation}</p>}
    </div>);
};
export default Chat;
