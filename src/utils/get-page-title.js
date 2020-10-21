import defaultSettings from '@/settings'

const title = defaultSettings.title || '微信读书'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
