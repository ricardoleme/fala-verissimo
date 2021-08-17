import React, {useState} from 'react' //useState é um Hook para gerenciar os estados
import { SafeAreaView, 
         View, 
         Text, 
         StyleSheet, 
         Image, 
         ActivityIndicator } from 'react-native'
import verissimo from './assets/verissimo.png'
import { FontAwesome } from '@expo/vector-icons'
import * as Speech from 'expo-speech'

export default function App(){
  const [falando, setFalando] = useState(false)

  let frases = ["A paixão queima, o amor enlouquece, o desejo trai.",
  "Cansa na hora que você percebe que ter 10 pessoas ao mesmo tempo é o mesmo que não ter nenhuma, e ter apenas uma, é o mesmo que possuir 10 ao mesmo tempo.",
  "A vida é curta, longa é a paixão.", 
  "Acredito que o status de cafona surgiu porque a grande maioria das pessoas nunca teve a oportunidade de viver um grande amor.", 
  "São nos pequenos atos que a gente vê como a pessoa é de verdade.", 
  "Casal que conversa, não briga. E se briga, resolve na cama.",
  "Amor é demonstrar sentimento todo dia, mesmo sem dizer nada.", 
  "Viver junto é aprender aos poucos o que o outro tem por dentro.",
  "A gente sabe que tá apaixonado quando acha o outro perfeito, mesmo com todos os defeitos.",
  "Às vezes, a única coisa verdadeira num jornal é a data.",
  "Visita de parente é uó: você fala para eles se sentirem em casa e eles acreditam.",
  "Os homens são muito objetivos e práticos quando o assunto não tem a ver com eles.",
  "Chefe jantando na sua casa é tipo uma inspeção da ONU: tem que ser tudo planejado nos mínimos detalhes.",
  "Dá pra saber muita coisa sobre uma pessoa pelo toque que ela escolhe para o celular.",
  "Não somos otários, como pensam. Somos hipócritas. Isto é, otários conscientes, otários assumidos, otários porque o contrário seria sucumbir ao amoralismo dos outros.", 
  "Quase sempre, uma vida só é extraordinária na opinião de quem conta."]
  
  const iniciaFala = () => {
    setFalando(true)
  }

  const finalizaFala = () => {
    setFalando(false)
  }

  function falar(){
    let frase = frases[parseInt(Math.random() * frases.length)]
    Speech.speak(frase, {
      language: 'pt',
      onStart: iniciaFala,
      onDone: finalizaFala 
    })
  }
  function parar(){
    Speech.stop()
  }
  return(
    <SafeAreaView style={styles.Principal}>
      <Text style={styles.Titulo}>
        <FontAwesome name="comment-o" size={40}/> Fala Veríssimo! 
      </Text>
      <Image source={verissimo} style={styles.Imagem} />
      {/* Sou um comentário */}
      {falando && <ActivityIndicator size="large" color="#0275d8" /> }
      <View style={styles.ViewBotao}>
        <FontAwesome.Button
            name="volume-up"
            backgroundColor="#0275d8"
            onPress={falar}
            style={styles.Botao}>
              Ouvir a frase
        </FontAwesome.Button>
        <FontAwesome.Button
            name="stop-circle"
            backgroundColor={!falando ? "#CCCCCC" : "#D9534F"}
            disabled={!falando}
            onPress={parar}
            style={styles.Botao}>
              Parar
        </FontAwesome.Button>
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  Principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around', //distribui uniformemente os elementos na vertical,
    alignItems: 'center'
  },
  Titulo: {
    fontSize: 30,
    color: "#1A237E"
  },
  Imagem: {
    resizeMode: 'center',
    width: '95%',
    height: 400
  },
  Botao:{
    width: 150,
    height: 32
  },
  ViewBotao: {
    flexDirection: 'row'
  }
})

