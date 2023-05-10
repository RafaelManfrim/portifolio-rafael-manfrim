import { BsCaretDownFill, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { Button, Image, Layout, Space, Timeline, Typography } from "antd"
import { TypeAnimation } from "react-type-animation"
import { Link as ScrollLink } from 'react-scroll'
import { Link } from "react-router-dom"

const { Content } = Layout

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

export function Portifolio() {
  return (
    <Layout>
      <Content className="presentation-container">
        <Typography.Title>
          Rafael Manfrim
        </Typography.Title>
        <TypeAnimation
          sequence={[
            `Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut lab, 
            sed do eiusmod tempor incididunt ut lab, sed do eiusmod tempor incididunt ut lab,
            sed do eiusmod tempor incididunt ut lab, sed do eiusmod tempor incididunt ut lab,
            sed do eiusmod tempor incididunt ut lab, sed do eiusmod tempor incididunt ut lab,
            sed do eiusmod tempor incididunt ut lab, sed do eiusmod tempor incididunt ut lab,
            sed do eiusmod tempor incididunt ut lab, sed do eiusmod tempor incididunt ut lab,
            sed do eiusmod tempor incididunt ut lab, sed do eiusmod tempor incididunt ut lab,
            sed do eiusmod tempor incididunt ut lab, sed do eiusmod tempor incididunt ut lab,`,
            2000,
          ]}
          wrapper="p"
          cursor={true}
        />
        <Space size="middle">
          <Link to="https://www.github.com/rafaelmanfrim">
            <BsGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/rafael-manfrim/">
            <BsLinkedin />
          </Link>
          <Link to="https://www.instagram.com/rafamanfrim/">
            <BsInstagram />
          </Link>
        </Space>
        <ScrollLink to="timeline-container" smooth>
          <Button size="large" type="primary" shape="circle" icon={<BsCaretDownFill />} />
        </ScrollLink>
      </Content>
      <Content className="timeline-container" id="timeline-container">
        <Typography.Title>Linha do Tempo</Typography.Title>
        <Space>
          <Image src="/eu.jpg" alt="Foto Rafael Manfrim" preview={false} />
          <Timeline mode="left" items={historyItems} />
        </Space>
      </Content>
      <Content className="specialization-container">
        <Typography.Title>Especializações</Typography.Title>
      </Content>
    </Layout>
  )
}