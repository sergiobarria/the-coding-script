import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  vscDarkPlus,
  synthwave84,
  materialOceanic,
  duotoneDark,
  dracula,
  darcula,
  tomorrow,
} from "react-syntax-highlighter/dist/cjs/styles/prism"

export const serializers = {
  types: {
    code: (props) => (
      <SyntaxHighlighter language={props.node.language} style={dracula}>
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
}
