import { LanguageContext } from 'contexts/LanguageContext'
import { generateTransText } from 'helper'
import { navigate, usePath } from 'hookrouter'
import { useContext } from 'react'

import { LOCAL_STORAGE_LOCALE } from 'constants/storage.constant'

const Translate = ({ text }) => {
    const { locale } = useContext(LanguageContext)

    try {
        const path = usePath()
        return generateTransText(text, path, locale)
    } catch (error) {
        localStorage.setItem(LOCAL_STORAGE_LOCALE, 'en')
        navigate('/404')
        // throw error
    }
}

export default Translate
