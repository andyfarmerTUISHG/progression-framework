// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle> Welcome To </Subtitle>{' '}
            <Title> Progression at Travelopia </Title>{' '}
          </DescriptionTitleGroup>{' '}
          <Description>
            <DescriptionText>
              This is an example taken from the Monzo Framework - and how we
              could utilise for Travelopia.{' '}
            </DescriptionText>{' '}
            <DescriptionText>
              Progression frameworks are tools that help us evaluate and pay our
              staff consistently, and help people understand how to progress in
              their work.{' '}
            </DescriptionText>{' '}
            <DescriptionText>
              We & apos; ll be adding more frameworks as we build them, and
              updating existing ones as we grow, so expect things to change
              around here!
            </DescriptionText>{' '}
            <DescriptionText>
              This site, along with all our progression frameworks, are open
              source.That means you can contribute to the development of this
              site or our progression frameworks, and use both as inspiration
              for your own projects!
            </DescriptionText>{' '}
            <DescriptionText>
              Take a look around and let us know what you think!
            </DescriptionText>{' '}
            <DescriptionText>
              Inspired by{' '}
              <a href="https://progression.monzo.com/">
                https: //progression.monzo.com/
              </a>{' '}
            </DescriptionText>{' '}
          </Description>{' '}
        </DescriptionView>{' '}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
