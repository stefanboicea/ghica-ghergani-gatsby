import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" /> */}
        {/* <link rel="shortcut icon" href="../images/favicon.ico" /> */}
        {/* <title>Monaco – Beautiful Vintage Multi-Concept Theme | Audio Post</title> */}

        {/* <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' /> */}
        <link rel='stylesheet' href={'/css/bootstrap.min.css'} type='text/css' media='all' />

        {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
        {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
        {/*[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]*/}
        {props.headComponents}
      </head>
      <body onUnload="" {...props.bodyAttributes} >
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>

        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        


        <script type='text/javascript' src={'/js/jquery.min.js'}></script>
        <script type='text/javascript' src={'/js/jquery-migrate.min.js'}></script>
        <script type='text/javascript' src={'/js/bootstrap.min.js'}></script>
        <script type='text/javascript' src={'/js/jquery.themepunch.tools.min.js'}></script>
        <script type='text/javascript' src={'/js/jquery.themepunch.revolution.min.js'}></script>
        <script type='text/javascript' src={'/js/wow.min.js'}></script>
        <script type='text/javascript' src={'/js/jquery.parallax-1.1.3.js'}></script>
        <script type='text/javascript' src={'/js/mobile-menu.js'}></script>
        <script type='text/javascript' src={'/js/jquery.prettyPhoto.js'}></script>
        <script type='text/javascript' src={'/js/waypoints.min.js'}></script>
        <script type='text/javascript' src={'/js/modernizr.min.js'}></script>
        <script type='text/javascript' src={'/js/jquery.countTo.js'}></script>
        <script type="text/javascript" src={'/js/bootstrap-progressbar.min.js'}></script>
        <script type='text/javascript' src={'/js/jquery.imagesloaded.js'}></script>
        <script type='text/javascript' src={'/js/jquery.shuffle.js'}></script>
        <script type='text/javascript' src={'/js/jquery.shuffle.init.js'}></script>

        <script type='text/javascript' src={'/js/extensions/revolution.extension.video.min.js'}></script>
        <script type='text/javascript' src={'/js/extensions/revolution.extension.slideanims.min.js'}></script>
        <script type='text/javascript' src={'/js/extensions/revolution.extension.actions.min.js'}></script>
        <script type='text/javascript' src={'/js/extensions/revolution.extension.layeranimation.min.js'}></script>
        <script type='text/javascript' src={'/js/extensions/revolution.extension.kenburn.min.js'}></script>
        <script type='text/javascript' src={'/js/extensions/revolution.extension.navigation.min.js'}></script>
        <script type='text/javascript' src={'/js/extensions/revolution.extension.migration.min.js'}></script>
        <script type='text/javascript' src={'/js/extensions/revolution.extension.parallax.min.js'}></script>

        <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyDwtb7cR_XBPEvxtQ_Yq3_xKsOWQroCTPA&amp;sensor=false"></script>
        <script type='text/javascript' src={'/js/main.js'}></script>
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
