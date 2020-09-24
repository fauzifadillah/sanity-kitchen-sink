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
                  buildHookId: '5f6c16de61873f6cde672d92',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bse5mxyv',
                  apiId: 'a950edb1-aae1-4513-bfa5-36fcadfc6661'
                },
                {
                  buildHookId: '5f6c16de61873f6cf0672f46',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-czb8x7up',
                  apiId: '0bbd3c2d-f4ed-4b02-ba47-c4fdc51ed65d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fauzifadillah/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-czb8x7up.netlify.app', category: 'apps'}
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
