import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg"

export default function SobreMim(){
    return(
          <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou Driely!
            </h3>
            <img src={fotoSobreMim} alt="Foto de Driely sorrindo" className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedora Front-end e estou contente de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no programa Mulheres.tech, uma parceria entre SENAC e prefeitura do Rio de Janeiro. Eu aprendi lógica de programação e o básico de algumas linguagem, como MySQL e PHP, mas sem aprofundar muito em cada uma delas. Sempre me interessei por programação, mas nunca me senti capaz de aprender a programar.
            </p>
            <p className={styles.paragrafo}>
                Durante o programa Mulheres.tech, tive a oportunidade de estudar desenvolvimento web e ao decorrer do curso, me apaixonei ainda mais por programação e tive a certeza da jornada que iria trilhar.
            </p>
            <p className={styles.paragrafo}>
                E não parei por ai, logo após minha formação do curso, surgiu uma nova oportunidade de fazer parte do programa ONE, formação Front-end, da ORACLE em parceria com ALURA. Aprendi mais sobre HTML, CSS, versionamento de códigos, estudos aprofundados em JavaScript e React. Foram meses incríveis e intensos de aprendizagem.
            </p>
            <p className={styles.paragrafo}>
                Estou muito feliz com meu progresso e ansiosa para aprender novas linguagens, criar experiências e assim poder trabalhar com o que amo fazer, programar! :)
            </p>
          </PostModelo>
            
        
    )
}