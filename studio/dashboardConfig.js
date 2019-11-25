export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ddc39da17b1c45026a16ebb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a6xcrpn7',
                  apiId: 'fec7c5d8-8e92-4e94-9022-a2ae211d5994'
                },
                {
                  buildHookId: '5ddc39db3e297f8cb0555d3b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-89cc9f27',
                  apiId: 'a0222996-110a-4c7f-aaac-2d3f00b59ea5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/franc014/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-89cc9f27.netlify.com', category: 'apps'}
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
