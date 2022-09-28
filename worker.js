export const api = {
  icon: '🚀',
  name: 'templates.do',
  description: 'Cloudflare Worker Template',
  url: 'https://templates.do/api',
  type: 'https://apis.do/templates',
  endpoints: {
    listCategories: 'https://templates.do/api',
    getCategory: 'https://templates.do/:type',
  },
  site: 'https://templates.do',
  login: 'https://templates.do/login',
  signup: 'https://templates.do/signup',
  subscribe: 'https://templates.do/subscribe',
  repo: 'https://github.com/drivly/templates.do',
}

export const gettingStarted = [
  ' _____  _____ ___  _________  _       ___   _____  _____  _____    ______  _____ ',
  '|_   _||  ___||  \/  || ___ \| |     / _ \ |_   _||  ___|/  ___|   |  _  \|  _  |',
  '  | |  | |__  | .  . || |_/ /| |    / /_\ \  | |  | |__  \ `--.    | | | || | | |',
  '  | |  |  __| | |\/| ||  __/ | |    |  _  |  | |  |  __|  `--. \   | | | || | | |',
  '  | |  | |___ | |  | || |    | |____| | | |  | |  | |___ /\__/ / _ | |/ / \ \_/ /',
  '  \_/  \____/ \_|  |_/\_|    \_____/\_| |_/  \_/  \____/ \____/ (_)|___/   \___/ ',
  '                                                                                 ',
  '                                                                                 ',
  'If you don\'t already have a JSON Viewer Browser Extension, get that first:',
  '',
  'https://pretty.json.fyi',
]

export const examples = {
  listItems: 'https://templates.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
