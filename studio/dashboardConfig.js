export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '625ba4390fc57218e91a5cb2',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-o1fg99nq',
                  apiId: '75b8c7d2-5b19-4e82-a217-9f094f2b01b8'
                },
                {
                  buildHookId: '625ba43ad04b9a18cc1656e6',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-1bnb9935',
                  apiId: '835d2d61-b217-4ef9-93f5-a576081c8351'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/space-cadett/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-1bnb9935.netlify.app', category: 'apps'}
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
