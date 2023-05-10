import { Button, Layout, Space, Timeline, Typography } from "antd"
import { TypeAnimation } from "react-type-animation"
import { BsCaretDownFill, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { Link } from "react-router-dom"

const { Content } = Layout

const contentContainerStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#8e10e9',
}

const experienceContainerStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#10e98e',
}

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
          <Link to="https://www.github.com/rafaelmanfrim" className="teste">
            <BsGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/rafael-manfrim/" className="teste">
            <BsLinkedin />
          </Link>
          <Link to="https://www.instagram.com/rafamanfrim/" className="teste">
            <BsInstagram />
          </Link>
        </Space>
        <Button size="large" type="primary" shape="circle" icon={<BsCaretDownFill />} />
      </Content>
      <Content style={contentContainerStyle}>
        <div>FOTO MINHA</div>
        <Timeline
          mode="left"
          items={[
            {
              label: '2015-09-01',
              children: 'Create a services',
              color: 'green',
            },
            {
              label: '2015-09-01 09:12:11',
              children: 'Solve initial network problems',
            },
            {
              children: 'Technical testing',
            },
            {
              label: '2015-09-01 09:12:11',
              children: 'Network problems being solved',
            },
          ]}
        />
      </Content>
      <Content style={experienceContainerStyle}>
        <Typography>Especializações</Typography>
      </Content>
    </Layout>
  )
}