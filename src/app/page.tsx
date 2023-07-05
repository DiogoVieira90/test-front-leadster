'use client'
import Image from 'next/image'
import styled from 'styled-components'

import Logo from '../assets/logo.png'
import HeaderDecoration from '../assets/asset-header.png'
import Thumbnail from '../assets/thumbnail.png'
import SeloRD from '../assets/selo_RD.png'
import NoCard from '../assets/no-card-dark.webp'
import Rating from '../assets/rating.webp'

export default function Home() {
  return (
    <>
      <header>
        <Image src={Logo} width={194} alt="Logo Leadster" />
      </header>
      <section>
        <p>WEBINARS EXCLUSIVOS</p>
        <h3>Menos Conversinha,</h3>
        <h1>Mais Conversão</h1>
        <Image src={HeaderDecoration} width={50} alt="" />
        <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como e como aplicá-las no seu negócio</p>
      </section>

      <section>
        <div>
          <div>
            <div>
              <span>Agências</span>
              <span>Chatbot</span>
              <span>Marketing Digital</span>
              <span>Geração de Leads</span>
              <span>Mídia Paga</span>
            </div>

            <div>
              <span>ordenar por</span>
              <select name="select" id="">
                <option value="1">Data de Publicação</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <Image src={Thumbnail} width={240} alt="" />
          <p>Como aumentar sua Geração de Leads feat. Traktor</p>
        </div>

        <div>
          <span>Página</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>

      </section>

      <section>
        <div>
          <div>
            <span>14 Dias Grátis</span>
            <div>
              <span>Formulário de Contato</span>
              <span>150 Leads</span>
            </div>
          </div>

          <div>
            <div>
              <p>Pronto para triplicar sua</p>
              <p>Geração de Leads?</p>
              <p>Criação e ativação em <strong>4 minutos.</strong></p>
            </div>

            <div>
              <div>
                <button>VER DEMONSTRAÇÃO</button>
                <Image src={SeloRD} width={205} alt="" />
              </div>
              <div>
                <Image src={NoCard} width={16} alt="" />
                <p><strong>Não</strong> é necessário Cartão de Crédito | </p>
                <Image src={Rating} width={92} alt="" />
                <p><strong>4.9/5</strong> média de satifação</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <Image src={Logo} width={194} alt="Logo Leadster" />
          <p>Transformando visitantes em Clientes</p>
        </div>

        <div>
          <h3>Links Principais</h3>
          <a href="#">Home</a>
          <a href="#">Ferramenta</a>
          <a href="#">Preços</a>
          <a href="#">Contato</a>
        </div>

      </section>

      <footer>
        <p>Copyright © 2015 - 2022 Todos os direitos reservados | <a href="#">Leadster</a></p>
        <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
      </footer>
    </>
  )
}
