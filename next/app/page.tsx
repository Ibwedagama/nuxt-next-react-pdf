'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  text: {
    margin: 12,
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  }
})

export default function Home() {
  const [text, setText] = useState('')

  useEffect(() => {
    const handleMessage = (event) => {
      setText(event.data)
    }

    window.addEventListener('message', handleMessage)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div>
      <div className="w-full p-8 bg-green-500">
        <button className="p-4 bg-blue-500">Download</button>
      </div>
      <h1 className="mb-8 text-2xl">This is Next.js</h1>
      <div className="border border-gray-500">
        <Document>
          <Page style={styles.page} size="A4">
            <Text style={styles.text}>{text}</Text>
          </Page>
        </Document>
      </div>
    </div>
  )
}
