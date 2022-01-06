import {Link} from 'react-router-dom'
import illustrationIMG from '../assets/imagess/illustration.svg'
import logoIMG from '../assets/imagess/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/button';

import { useAuth } from '../hooks/useAuth';


export function NewRoom() {
  const {user} = useAuth();
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationIMG} alt="" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
          <div className="main-content">
              <img src={logoIMG} alt=""/>
              <h2>Criar uma nova sala</h2>
              <h1>{user?.name}</h1>
              <form>
                  <input
                  type="text"
                  placeholder="Nome da sala"
                  />
                  <Button type="submit">
                      Criar sala
                  </Button>
              </form>
              <p> Quer entrar em uma sala existente? <Link to="/"> Clique aqui</Link></p>
          </div>
      </main>
    </div>
  )
}