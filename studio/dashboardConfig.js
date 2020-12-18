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
                  buildHookId: '5fdc5b126e0c5a8185d01329',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-o33hekzv',
                  apiId: 'fdff6ad1-b099-4145-9d0f-712c7ffe983b'
                },
                {
                  buildHookId: '5fdc5b12204a0d7d7d7e6bbb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mom9qz8v',
                  apiId: 'd7be4184-cd6a-475b-992b-14f1ec34cc1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tan3584/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mom9qz8v.netlify.app', category: 'apps'}
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
