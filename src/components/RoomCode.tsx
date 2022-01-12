import copyImg from '../assets/imagess/copy.svg';
import '../styles/RoomCode.scss'

type RoomCodeProps ={
    code: string;
}

export function RoomCode(props: RoomCodeProps){
    function copyRoomCodeToClipBard(){
        navigator.clipboard.writeText(props.code)
    }
    return(
        <button className="room-code" onClick={copyRoomCodeToClipBard}>
            <div>
                <img src={copyImg} alt="" />
            </div>
            <span> Sala #{props.code}</span>
        </button>
    )
}