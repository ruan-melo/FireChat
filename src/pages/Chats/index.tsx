import './styles.scss';
import DefaultUserImg from '../../assets/default-user-image.png';
import { useAuth } from '../../hooks/useAuth';
// import {} from '../../assets/'


const Chats = () => {
    const { user } = useAuth();

    console.log(user);

    if (!user) {
        return (
            <p>You must be logged in to use chat</p>
        )
    }

    return (
        <div id = 'page-chats'>
            <div className = 'app-name'>
                <img src="https://img.icons8.com/color/48/000000/fire-element--v1.png" />
                <h1> FireChat </h1>
            </div>
            <main>
                <div className='chat-options'>
                    <div className='user-info'>
                        <div className='user-img'>
                            <img src={user.avatar? user.avatar : DefaultUserImg} title ={user.name} alt={`Foto de ${user.name}`} />
                        </div>
                        <span>{user.name}</span>
                    </div>
                
                
                    <div className='chats-menu'>
                        <div className="menu-chats selected">
                            <span>Chats</span>
                        </div>
                        <div className='menu-contacts '>
                            <span>Contacts</span>
                            </div>
                        <button className="add-contact">
                                +
                        </button>
                    </div>
                    
                    <div className='chats'>
                        <ul>
                            <li className = 'chat'>
                                <div className='user-img'>
                                    <img src={DefaultUserImg} title ={''} alt="NOME DO USUARIO" />
                                </div>
                                <div className='infos-message'>
                                    <div className='infos' >
                                        <div className='contact-name'>
                                            Hiroshi
                                        </div>
                                        <div className="message-time">
                                            23:59
                                        </div>
                                    </div>
                                    <span className='last-message'>
                                        ultima mensagem

                                    </span>
                                </div>
                            </li>

                            <li className = 'chat'>
                                <div className='user-img'>
                                    <img src={DefaultUserImg} title ={''} alt="NOME DO USUARIO" />
                                </div>
                                <div className='infos-message'>
                                    <div className='infos' >
                                        <div className='contact-name'>
                                            Hiroshi
                                        </div>
                                        <div className="message-time">
                                            23:59
                                        </div>
                                    </div>
                                    <span className='last-message'>
                                        ultima mensagem

                                    </span>
                                </div>
                            </li>
                            <li className = 'chat'>
                                <div className='user-img'>
                                    <img src={DefaultUserImg} title ={''} alt="NOME DO USUARIO" />
                                </div>
                                <div className='infos-message'>
                                    <div className='infos' >
                                        <div className='contact-name'>
                                            Hiroshi
                                        </div>
                                        <div className="message-time">
                                            23:59
                                        </div>
                                    </div>
                                    <span className='last-message'>
                                        ultima mensagem

                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='contacts hidden'> 
                        <ul>
                            <li className='contact'>
                                <div className='user-img'>
                                    <img src={DefaultUserImg} title ={''} alt="NOME DO USUARIO" />
                                </div>
                                <span>Nome do usuário</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="open-chat">
                    <div className="chat-header">
                        <div className='user-img'>
                                    <img src={DefaultUserImg} title ={''} alt="NOME DO USUARIO" />
                        </div>
                        <span>Hiroshi</span>
                    </div>
                    <div className='messages'>
                        <div className='received-message'>
                            <div className='user-img'>
                                    <img src={DefaultUserImg} title ={''} alt="NOME DO USUARIO" />
                            </div>
                            <div className='message-data'>
                                <div className='message-text'>
                                    Olá mundo!
                                </div>
                                <div className='message-time'>
                                    23:59
                                </div>
                            </div>
                        </div>
                        
                        <div className='sent-message'>
                            <div className='user-img'>
                                    <img src={DefaultUserImg} title ={''} alt="NOME DO USUARIO" />
                            </div>
                            <div className='message-data'>
                                <div className='message-text'>
                                    Olá!
                                </div>
                                <div className='message-time'>
                                    00:00
                                </div>
                            </div>
                        </div>
                         <div className='sent-message'>
                            <div className='user-img'>
                                    <img src={DefaultUserImg} title ={''} alt="NOME DO USUARIO" />
                            </div>
                            <div className='message-data'>
                                <div className='message-text'>
                                    Como você está?
                                </div>
                                <div className='message-time'>
                                    00:00
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <form>
                        <textarea placeholder ='Escreva uma mensagem' />
                        <button className = 'send-button'>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/paper-plane.png"/>
                        </button>
                    </form>
                </div>
            </main>

        </div>

       
    )
}

export default Chats;