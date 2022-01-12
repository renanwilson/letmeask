import { useHistory } from "react-router-dom";
import illustrationIMG from "../assets/imagess/illustration.svg";
import logoIMG from "../assets/imagess/logo.svg";
import googleIconIMG from "../assets/imagess/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/button";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth"


export function Home() {
  const history = useHistory();
  const {signInWithGoogle, user} = useAuth()
  const [roomCode, setRoomCode] = useState('');

 async function handleCreateRoom() {
    if(!user){
      await signInWithGoogle()
    }
    history.push("/room/new");
    }
    async function handleJoinRoom(event: FormEvent) {
      event.preventDefault();
      if (roomCode.trim() === ''){
        return;
      }
      const roomRef = await database.ref(`rooms/${roomCode}`).get();

      if(!roomRef.exists()){
        alert('Room does not exists.');
        return;
      }

      history.push(`/room/${roomCode}`);
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
          <img src={logoIMG} alt="" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconIMG} alt="" />
            Crie sua sala com google
          </button>
          <div className="separator"> ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="digite o codigo da sala"
             onChange={event => setRoomCode(event.target.value)} value={roomCode}/>
            <Button type="submit" onClick={handleJoinRoom}>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
