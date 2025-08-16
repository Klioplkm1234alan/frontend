import React, { useState, useEffect } from 'react'
import JustButton from '../components/justButton.jsx'
import Screen from '../components/Screen.jsx'
import LilcuteptuteMSG from '../components/LilcuteptuteMSG.jsx'
import LilredcuteptuteMSG from '../components/LilredcuteptuteMSG.jsx'
import { useTranslation } from 'react-i18next'

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000"

const Home = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [visibility, setVisibility] = useState("public")
  const [showMsg, setShowMsg] = useState(false)
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    const savedLang = localStorage.getItem('lang')
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang)
    }
  }, [i18n])

  const sanitizeInput = (input) => {
    if (!input) return ""
    let sanitized = input.trim().slice(0, 200)
    sanitized = sanitized.replace(/[<>$]/g, "")
    return sanitized
  }

  const sanitizeDesc = (input) => {
    if (!input) return ""
    let sanitized = input.trim().slice(0, 1000)
    sanitized = sanitized.replace(/[<>$]/g, "")
    return sanitized
  }

  const handleSubmit = async () => {
    const cleanTitle = sanitizeInput(title)
    const cleanDesc = sanitizeDesc(desc)

    if (cleanTitle.length < 3 || cleanDesc.length < 10) {
      setShowErrorMsg(true)
      setTimeout(() => setShowErrorMsg(false), 2500)
      return
    }

    if (isSubmitting) return

    setIsSubmitting(true)
    try {
      const res = await fetch(`${API_BASE}/complaints`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: cleanTitle, desc: cleanDesc, visibility }),
      })

      if (!res.ok) throw new Error("Failed to submit complaint")

      setTitle("")
      setDesc("")
      setVisibility("public")
      setShowMsg(true)
      setTimeout(() => setShowMsg(false), 2500)
    } catch (err) {
      console.error("Error sending complaint:", err)
      setShowErrorMsg(true)
      setTimeout(() => setShowErrorMsg(false), 2500)
    } finally {
      setIsSubmitting(false)
    }
  }

  const buttonText = i18n.language === 'ku' ? 'en' : 'ku'

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ku' ? 'en' : 'ku'
    i18n.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)
  }

  return (
    <Screen>
      <div className='flex items-center justify-between w-90'>
        <h1 className='text-2xl pl-3 sm:pl-0 font-bold mb-4 text-left'>{t('1')}</h1>
        <button onClick={toggleLanguage} className="shadow-sm bg-white rounded-xl w-15 h-8">
          {buttonText}
        </button>
      </div>

      <div className='min-h-130 w-90 sm:w-100 bg-white rounded-2xl p-4 shadow-lg flex flex-col'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-1.5'>
            <img src="/send.svg" className='h-5.5 w-5.5' alt="" />
            <h1 className='text-2xl font-semibold '>{t('2')}</h1>
          </div>
          <p className='text-gray-400'>{t('3')}</p>
        </div>

        <div className='flex flex-col py-6 gap-2'>
          <label htmlFor="inputTitle" className='pl-2 font-semibold'>{t('4')}</label>
          <input
            type="text"
            id='inputTitle'
            placeholder={t('5')}
            className='bg-[hsl(210_40%_98%)] p-2 rounded-xl border border-[hsl(214.3_31.8%_91.4%)]'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div className='flex flex-col pb-6 gap-2'>
          <label htmlFor="inputDesc" className='pl-2 font-semibold'>{t('6')}</label>
          <textarea
            type="text"
            id='inputDesc'
            placeholder={t('7')}
            className='bg-[hsl(210_40%_98%)] p-2 h-25 rounded-xl border border-[hsl(214.3_31.8%_91.4%)]'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div className='pb-5'>
          <h1 className='font-semibold'>{t('8')}</h1>

          <div className='flex gap-2 py-1.5 items-center'>
            <input
              type="radio"
              checked={visibility === "private"}
              onChange={() => setVisibility("private")}
              id='private'
              name='check'
              className="h-4 w-4 text-blue-600 accent-blue-600"
              disabled={isSubmitting}
            />
            <p>{t('9')}</p>
          </div>
          <div className='flex gap-2 py-1.5 items-center'>
            <input
              type="radio"
              id='public'
              checked={visibility === "public"}
              onChange={() => setVisibility("public")}
              name='check'
              className="h-4 w-4 text-blue-600 accent-blue-600"
              disabled={isSubmitting}
            />
            <p className='leading-tight'>{t('10')}</p>
          </div>
        </div>

        <JustButton onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? t('Submitting...') : t('11')}
        </JustButton>
      </div>

      {showMsg && (
        <div className="fixed bottom-50 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <LilcuteptuteMSG />
        </div>
      )}

      {showErrorMsg && (
        <div className="fixed bottom-50 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <LilredcuteptuteMSG />
        </div>
      )}

    </Screen>
  )
}

export default Home
