import React from 'react'
import { Feature } from '../../components'
import './What1pag.css'

const What1pag = () => {

    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>

            <div className='gpt3__whatgpt3-feature'>

                <Feature
                    title='What is GPT-3'
                    text='We so opinion friends me message as delight. Whole front do of plate heard oh ough. His
                          defective nor conviced residence own. Connection has put impossible own apartments
                          boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                ></Feature>

            </div>

            <div className='gpt3__whatgpt3-heading'>

                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore the library</p>

            </div>

            <div className='gpt3__whatgpt3-container'>
                <Feature
                    title='Chatbots'
                    text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
                ></Feature>
                <Feature
                    title='Knowledgebase'
                    text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As impossible own apartments b'
                ></Feature>
                <Feature
                    title='Education'
                    text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As impossible own apartments'
                ></Feature>
            </div>

        </div>
    )

}

export default What1pag