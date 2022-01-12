import {Link, useHistory} from 'react-router-dom'
import illustrationIMG from '../assets/imagess/illustration.svg'
import logoIMG from '../assets/imagess/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/button';

import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase';

export function NewRoom() {
  const {user} = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');
  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    console.log(newRoom);

    if (newRoom.trim() === ''){
      return;
    }
    const roomRef = database.ref('rooms');

    const fireBaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/room/${fireBaseRoom.key}`)
  }
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
              <form onSubmit={handleCreateRoom}>
                  <input
                  type="text"
                  placeholder="Nome da sala"
                  onChange={event => setNewRoom(event.target.value)}
                  value={newRoom}
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