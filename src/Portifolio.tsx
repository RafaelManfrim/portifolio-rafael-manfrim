import { BsCaretDownFill, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { Button, Card, Col, Image, Layout, Row, Space, Tag, Timeline, Typography } from "antd"
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
  tag: 'Front-End' | 'Back-End' | 'Mobile' | 'Outros'
  school: string
  description: string
  certificate: string
}

const formations: Formation[] = [
  {
    title: 'ReactJS',
    school: 'Rocketseat',
    tag: 'Front-End',
    description: 'Curso avançado de ReactJS, usando diversas bibliotecas front-end, além de NextJS e realizando deploy.',
    certificate: 'https://drive.google.com/file/d/1VWgVsjzBxv_xK8YwlevpVCME2gjPi5vz/view?usp=sharing'
  },
  {
    title: 'React Native',
    school: 'Rocketseat',
    tag: 'Mobile',
    description: 'Curso de React Native com offline-first, construção de interfaces, deploy e muito mais.',
    certificate: 'https://drive.google.com/file/d/1nEk_cUTTXHF5-4jCILUwWMyOpHs0eSYk/view?usp=sharing'
  },
  {
    title: 'NodeJS',
    school: 'Rocketseat',
    tag: 'Back-End',
    description: 'Curso completo de NodeJS do zero ao deploy, com acesso a banco de dados, criação de APIs Rest, padrões de projeto e Serverless.',
    certificate: 'https://drive.google.com/file/d/1jc8hnvd_M6xUEicouJvy1ynQ1mXzHoih/view?usp=sharing'
  },
  {
    title: 'Elixir',
    school: 'Rocketseat',
    tag: 'Back-End',
    description: 'Aprendendo os fundamentos e criando APIs Rest com Elixir',
    certificate: 'https://drive.google.com/file/d/1LEDwhUQok56QaJ1RDLejRBxzRuLBOZKE/view?usp=sharing'
  },
  {
    title: 'Fundamentos de Expressões Regulares (Regex)',
    school: 'Cod3r | Udemy',
    tag: 'Outros',
    description: "Introdução a expressões regulares.",
    certificate: 'https://drive.google.com/file/d/14K-HkBMGz2UMLNkFFxBDkNlINXwVHOZ1/view?usp=sharing'
  }
]

const tagColors = {
  'Front-End': 'blue',
  'Back-End': 'green',
  'Mobile': 'orange',
  'Outros': 'purple',
}

export function Portifolio() {
  return (
    <Layout>
      <Layout.Content className="presentation-container">
        <Typography.Title>
          <TypeAnimation
            sequence={[
              'Rafael Manfrim',
              2000,
            ]}
            wrapper="strong"
            cursor={true}
          />
        </Typography.Title>
        <p>Desde criança sempre se encantou por tecnologia, o que o levou a cursar desenvolvimento de sistemas e se tornar um programador de destaque, após pouco tempo de curso já estava atuando no mercado de trabalho como desenvolvedor front-end e mais tarde buscou conhecimento para se tornar full-stack.</p>
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
          <Image src="/rafael-manfrim.jpeg" alt="Foto Rafael Manfrim" preview={false} />
          <Timeline mode="left" items={historyItems} />
        </Space>
      </Layout.Content>
      <Layout.Content className="specialization-container">
        <Typography.Title>Especializações</Typography.Title>
        <Row gutter={16}>
          {formations.map(formation => (
            <Col xs={24} md={12} xl={8}>
              <Card
                title={formation.title}
                extra={<Tag color={tagColors[formation.tag]}>{formation.tag}</Tag>}
                bordered={false}
              >
                <p>{formation.description}</p>
                <span>#{formation.school}</span>
                <Link to={formation.certificate} target="_blank">
                  Acessar certificado
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Layout.Content>
    </Layout>
  )
}