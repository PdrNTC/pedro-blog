import styles from './NaoEncontrada.module.css';
import gatinhoOculos from 'assets/gatinhoOculos.png';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}> 404 </span>
                <h1 className={styles.titulo}>
                    Ops! Página não Encontrada
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar("/")}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={gatinhoOculos}
                    alt="Cachorro de óculos"
                />

            </div>
            <div className={styles.espacoEmBranco}>

            </div>
        </>
    )
}