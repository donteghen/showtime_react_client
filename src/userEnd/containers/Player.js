import YouTube from 'react-youtube';
import { videoTimeFormat } from '../../utils/videoTimeFormater';

export default function Player ({videoId='2g811Eo7K8U'}) {
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
        console.log(videoTimeFormat(event.target.getDuration()))
    event.target.playVideo();
    }
    return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
}