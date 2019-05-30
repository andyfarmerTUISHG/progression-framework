const ReactGA = require('react-ga')

ReactGA.initialize('UA-XXXXXX')
ReactGA.set({
	appName: 'Progression at Monzo'
})

exports.onRouteUpdate = (state) => {
	ReactGA.pageview(state.location.pathname)
}

