import { BsCaretDownFill, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { Button, Image, Layout, Space, Timeline, Typography } from "antd"
import { TypeAnimation } from "react-type-animation"
import { Link as ScrollLink } from 'react-scroll'
import { Link } from "react-router-dom"

const historyItems = [
  {
    label: 'Fevereiro de 2020',
    children: 'Iniciou o curso técnico em desenvolvimento de sistemas integrado ao ensino médio',
  },
  {
    label: 'Setembro de 2020',
    children: 'Adquiriu seu primeiro curso de desenvolvimento web',
  },
  {
    label: 'Julho de 2021',
    children: 'Entrou na Nimbus Tecnologia como estagiário',
  },
  {
    label: 'Outubro de 2021',
    children: 'Iniciou sua formação na Rocketseat',
  },
  {
    label: 'Julho de 2022',
    children: 'Teve seu estágio prorrogado por mais 6 meses',
  },
  {
    label: 'Novembro de 2022',
    children: 'Entregou seu TCC e se formou no ensino médio',
  },
  {
    label: 'Janeiro de 2023',
    children: 'Foi efetivado e iniciou seu trabalho na Nimbus Tecnologia como desenvolvedor júnior',
  },
  {
    label: 'Março de 2023',
    children: 'Iniciou sua graduação em Análise e Desenvolvimento de Sistemas no IFSP',
  },
]

type Formation = {
  title: string
  tag: 'Front-End' | 'Back-End'
  school: string
  description: string
  certificate: string
}

const formations: Formation[] = [
  {
    title: 'ReactJS',
    school: 'Rocketseat',
    tag: 'Front-End',
    description: 'Curso avançado de ReactJS.',
    certificate: 'link'
  }
]

export function Portifolio() {
  return (
    <Layout>
      <Layout.Content className="presentation-container">
        <Typography.Title>
          Rafael Manfrim
        </Typography.Title>
        <TypeAnimation
          sequence={[
            'Desde criança sempre se encantou por tecnologia, o que o levou a cursar desenvolvimento de sistemas e se tornar um programador de destaque, após pouco tempo de curso já estava atuando no mercado de trabalho como desenvolvedor front-end e mais tarde buscou conhecimento para se tornar full-stack.',
            2000,
          ]}
          wrapper="p"
          cursor={true}
        />
        <Space size="middle">
          <Link to="https://www.github.com/rafaelmanfrim" target="_blank">
            <BsGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/rafael-manfrim/" target="_blank">
            <BsLinkedin />
          </Link>
          <Link to="https://www.instagram.com/rafamanfrim/" target="_blank">
            <BsInstagram />
          </Link>
        </Space>
        <ScrollLink to="timeline-container" smooth>
          <Button size="large" type="primary" shape="circle" icon={<BsCaretDownFill />} />
        </ScrollLink>
      </Layout.Content>
      <Layout.Content className="timeline-container" id="timeline-container">
        <Typography.Title>Linha do Tempo</Typography.Title>
        <Space>
          <Image src="/eu.jpg" alt="Foto Rafael Manfrim" preview={false} />
          <Timeline mode="left" items={historyItems} />
        </Space>
      </Layout.Content>
      <Layout.Content className="specialization-container">
        <Typography.Title>Especializações</Typography.Title>
        {/* Colocar um slider de formações */}
        {formations.map(formation => (
          <div>
            <div>
              <strong>{formation.title}</strong>
              <span>{formation.tag}</span>
            </div>
            <span>{formation.school}</span>
            <p>{formation.description}</p>
            <a href={formation.certificate}>Acessar certificado</a>
          </div>
        ))}
      </Layout.Content>
    </Layout>
  )
}