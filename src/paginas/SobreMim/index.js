import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto_dois.png';

export default function SobreMim () {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Pedro!
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto do Pedro sorrindo'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, Tudo bem? Meu nome é Pedro Henrique, atualmente possuo 24 anos de idade! sou desenvolvedor Front-end um apaixonado por tecnologia, e gamer nas horas vagas.
            </p>

            <p className={styles.paragrafo}>
                Sou graduado em Ciência da computação, moro em Brasília-DF. Meus hobbies favoritos são fazer atividade física e assistir séries e filmes.
            </p>

            <p className={styles.paragrafo}>
                Quando comecei o curso na faculdade, meu sonho sempre foi atuar na área de programação, pois os desafios sempre me motivaram a sair do outro lado e buscar uma solução para determinado problema.
            </p>

            <p className={styles.paragrafo}>
                Meu primeiro emprego foi como atendente de telemarketing, e posso dizer que foi uma fase complicada, mas de grande aprendizado pessoal. Após um ano trabalhando como telemarketing, consegui meu primeiro estágio na área de suporte de infraestrutura em TI.
            </p>

            <p className={styles.paragrafo}>
                Tempos depois entrei em outro estágio, novamente na área de infraestrutura onde permaneci por 1 ano e 9 meses, foi quando consegui minha efetivação como analista de sistemas e é onde trabalho atualmente também.
            </p>

            <p className={styles.paragrafo}>
                Hoje em dia estou focado nos estudos em programação Front-end e busco uma vaga para uma experiência prática e real de desenvolvimento.
            </p>
        </PostModelo>
    )
}