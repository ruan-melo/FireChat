import './styles.scss';
import { useHistory } from 'react-router-dom';
import illustrationImg from '../../assets/illustration.svg';
import googleIconImg from '../../assets/google-icon.svg'
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent, useState } from 'react';

const Home = () => {

    const history = useHistory();
    const {user, signInWithGoogle } = useAuth();

    const handleSignIn =  async () => {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/chats');
    }
 
    return (
        <div id = "page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando chat" />
                <strong>Conversas em tempo real</strong>
                <p>Inicie conversas em tempo real com qualquer usuário e em qualquer lugar</p>
            </aside>
             {/* <aside>
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tire as dúvidas da sua audiência</p>
        </aside> */}
            <main>
                <div className="main-content">
                    <div className = 'app-name'>
                        <img src="https://img.icons8.com/color/48/000000/fire-element--v1.png" />
                        <h1> FireChat </h1>
                    </div>
                <button onClick = {handleSignIn} className='login-google'>
                    <img src={googleIconImg} alt="Logo do Google" />
                    Entrar com o Google
                </button>
                {/* <div className="separator">ou entre com um email e senha</div>
                <form >
                    <input
                        type="text"
                        placeholder="Digite o código da sala"
                        
                    />
                    <Button type="submit">
                        Entrar na sala
                    </Button>
                </form> */}
            </div>
            </main>


        </div>
    )
}

export default Home;