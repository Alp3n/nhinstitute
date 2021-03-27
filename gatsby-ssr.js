import React from "react"
import { renderToString } from "react-dom/server"
import i18n from "./src/i18n"
import createStore from "./src/state/createStore"

replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.loadNamespaces(["translation"], () => {
    replaceBodyHTMLString(bodyComponent)
  })
}

export default replaceRenderer
