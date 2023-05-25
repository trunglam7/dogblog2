import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react'

const options = {
  renderNode:{
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return <p style={{'margin': '2rem 0'}}>{children}</p>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      return <img src={node.data.target.fields.file.url} alt='embedded asset' />
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return <ul style={{'listStylePosition': 'inside', 'display': 'flex', 'width': '100%'}}>{children}</ul>
    }
  }
};
export default function RichText({content} : any) {
  return (
    <>
        {documentToReactComponents(content, options)}
    </>
  )
}
