import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const [value, setValue] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        localStorage.setItem("userName", userName);
        navigate(`/room/${value}`)
    }, [navigate, value]);

    return (
        <div className='home-container'>
            <div className='logo-container'>
                <img src='logo.png' width='200px' />
                <p style={{margin:'0'}}>Create a Room to connect with your friends or strengers.</p>
            </div>
            <div className='box-container'>
                <div className='heading'>
                    <p>Create or Join Room</p>
                </div>
                <div className='form-container'>
                    <form onSubmit={handleJoinRoom}>
                    <div className='name-field'>
                        <label>Your Name</label>
                        <input type='text' placeholder='Enter your name'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='room-field'>
                        <label>Room Code</label>
                        <input type='text' placeholder='Enter Room Code'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' className='join-btn'>Join</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage;