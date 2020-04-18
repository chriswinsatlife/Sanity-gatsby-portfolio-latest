export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e9b683a7824faff837521dd',
                  title: 'Sanity Studio',
                  name: 'Sanity-gatsby-portfolio-latest-studio',
                  apiId: '5e1b617f-7d36-47dd-976f-ad06c5ce1a48'
                },
                {
                  buildHookId: '5e9b683a34c7192688bb9b4d',
                  title: 'Portfolio Website',
                  name: 'Sanity-gatsby-portfolio-latest',
                  apiId: '879a4678-6bfa-481a-b5d9-141b59850c6e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chriswinsatlife/Sanity-gatsby-portfolio-latest',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://Sanity-gatsby-portfolio-latest.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
