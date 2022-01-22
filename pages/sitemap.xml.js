import { getServerSideSitemap } from 'next-sitemap'
import { SITE_URL } from 'constants/headInfo'
import { ABOUT_URL, PROJECT_URL } from 'constants/links'
import { getProjects } from 'lib/getProjectData'

export const getServerSideProps = async ctx => {
  const links = [
    SITE_URL,
    `${SITE_URL}${ABOUT_URL}`,
    `${SITE_URL}${PROJECT_URL}`,
    ...getProjects().map(({ id }) => `${SITE_URL}${PROJECT_URL}/${id}`),
  ]

  const fields = links.map(link => ({
    loc: link,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemap(ctx, fields)
}

function Sitemap() {
  return null
}

export default Sitemap
