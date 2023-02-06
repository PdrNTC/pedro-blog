import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minhaFoto.png'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}> 
                <h1 className={styles.titulo}>
                    Pedro Hernandes
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu blog, meu nome é Pedro eu sou programador Front-End, e aqui você vai encontrar um pouco sobre mim, meus projetos e algumas curiosidades sobre o mundo da programação.
                </p>
            </div>

            <div className={styles.imagens}>
                {/*
                    <img 
                        className={styles.circuloColorido}
                        src={circuloColorido}
                        aria-hidden={true}
                        alt="Circulo colorido"
                    />
                */}
               
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Pedro"
                />
            </div>
        </div>
    )
}