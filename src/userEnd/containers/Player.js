import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { useLocation } from "react-router-dom";
import { fetchAllGames } from '../../api/games';
//import { videoTimeFormat } from '../../utils/videoTimeFormater';

export default function Player ({videoId='2g811Eo7K8U'}) {
    let location = useLocation;
    const [gameId, setGameId] = useState('')
    const [game, setGame] = useState({})
    
    useEffect(() => {
        getGame()
    }, [location])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          domain:'http://localhost:3000',
          enablejsapi: 1,
        },
    };
    const onReady = (event) => {
        event.target.playVideo();
    }
    const getGame = () => {
        fetchAllGames().then(result => {
            if(!result){

            }
            console.log(result)
        })
    }
    return (
        <div style={{}}>
            <div>
                <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
            <div>
                
            </div>
        </div>
    );
}