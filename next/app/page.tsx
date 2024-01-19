'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  }
})

export default function MyDocument() {
  const [text, setText] = useState('')
  const [key, setKey] = useState(0)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.source === 'nuxt-container') {
        setText(event.data.data.text)
        setKey((prevKey) => prevKey + 1)
      }
    }

    window.addEventListener('message', handleMessage)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <PDFViewer key={key} className="h-screen w-full">
      <Document>
        <Page style={styles.body} size="A4">
          <Text style={styles.text}>{text}</Text>
        </Page>
      </Document>
    </PDFViewer>
  )
}
