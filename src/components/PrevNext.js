import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

function PrevNext({ nodes, location }) {

  const flatSidebar = []

  nodes.forEach( node => {
    flatSidebar.push({
      title: node.node.frontmatter.title,
      link: node.node.fields.slug
    })
  })

  const arr = (location.href || '').split('#')[0].split('/').reverse()
  const index = arr[0] ? 0 : 1
  const currentPageLink = decodeURIComponent(`/${arr[index + 1]}/${arr[index]}/`)

  var currIndex = _.findIndex(flatSidebar, item => {
    return item.link === currentPageLink
  })

  const prev = flatSidebar[currIndex - 1] || null
  const next = flatSidebar[currIndex + 1] || null

  return (
    <div className="">
      {
        prev
          ? (
            <Link to={prev.link} className="font-kxzd">
              <span>上一章</span>
              <p>{prev.title}</p>
            </Link>
          )
          : (
            <div className=""></div>
          )
      }
      {
        next
          ? (
            <Link to={next.link} className="font-kxzd">
              <span>下一章</span>
              <p>{next.title}</p>
            </Link>
          )
          : (
            <div className=""></div>
          )
      }
    </div>
  )
}

export default PrevNext

