import { Timeline, Typography } from "antd"

export function Portifolio() {
  return (
    <div>
      <div>
        <Typography>Rafael Manfrim</Typography>
        <Typography>Apresentação</Typography>
      </div>
      <div>
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
      </div>
      <div>
        <Typography>Especializações</Typography>
      </div>
    </div>
  )
}