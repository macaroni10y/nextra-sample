import {SmileyIcon} from '@primer/octicons-react'

export default {
    logo: <span>devラジ on Tuesday </span>,
    project: {
        link: '/',
        icon: <SmileyIcon size={24}/>,
    },
    sidebar: {
        titleComponent({title}) {
            if (title === 'Introduce') return <>🥶{title}</>
            if (title === 'Examples') return <>❓{title}</>
            return <>👉 {title}</>
        }
    },
    editLink: {
        component: null
    },
    feedback: {
        content: null
    }
}
