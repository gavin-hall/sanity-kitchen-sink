export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5feb6ceea427e16b1930ad5e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rgbk2xnk',
                  apiId: '4879b1e3-255e-4b71-a5a7-78dfc47e8184'
                },
                {
                  buildHookId: '5feb6cee0458ef8fd1d64ce2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-817y5wm1',
                  apiId: '85785d89-f399-47ba-b49d-1ccaf3a1a001'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gavin-hall/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-817y5wm1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
