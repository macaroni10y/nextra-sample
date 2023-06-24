import {SmileyIcon} from '@primer/octicons-react'

export default {
    logo: <span>devラジの資料置き場</span>,
    project: {
        link: 'https://example.com',
        icon: <SmileyIcon size={24}/>,
    },
    sidebar: {
        titleComponent({title}) {
            if (title === 'Introduce') return <>🥶{title}</>
            if (title === 'Examples') return <>❓{title}</>
            return <>👉 {title}</>
        }
    }
}
