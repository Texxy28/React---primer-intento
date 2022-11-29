import React from 'react'

import { Footer, Blog, Possibility, Features, What1pag, Header } from './containers'
import { CTA, Brand, NavBar } from './components'
import './App.css'

const App = () => {

    return (
        <div className='App'>

            <div className='gradient__bg'>
                <NavBar></NavBar>
                <Header></Header>
            </div>
            <Brand></Brand>
            <What1pag></What1pag>
            <Features></Features>
            <Possibility></Possibility>
            <CTA></CTA>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    )

}

export default App