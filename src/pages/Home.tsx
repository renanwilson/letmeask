import { useHistory } from "react-router-dom";
import illustrationIMG from "../assets/imagess/illustration.svg";
import logoIMG from "../assets/imagess/logo.svg";
import googleIconIMG from "../assets/imagess/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/button";

import { useAuth } from "../hooks/useAuth"

export function Home() {
  const history = useHistory();
  const {signInWithGoogle, user} = useAuth()

 async function handleCreateRoom() {
    if(!user){
      await signInWithGoogle()
    }
    history.push("/room/new");
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
            <input type="text" placeholder="digite o codigo da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
