import { Page } from '../components/Page'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Dashboard() {
  return <Page>
    <h1>dashboard</h1>
  </Page>
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})
