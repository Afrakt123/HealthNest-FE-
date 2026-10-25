
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Bot,
  Send,
  UserRound,
  MessageCircle,
  Trash2,
  Sparkles,
  ShieldCheck
} from 'lucide-react'

const initialMessages = [
  {
    id: 1,
    sender: 'assistant',
    text: "Hi! 👋 Welcome to HealthNest Health Assistant. You can ask me general wellness questions. I'm currently a demo assistant, so my answers are limited."
  }
]

const quickQuestions = [
  'How can I improve my sleep?',
  'How can I stay hydrated?',
  'How can I build a healthy routine?',
  'How can I manage daily stress?'
]

function getDemoResponse(question) {
  const text = question.toLowerCase()

  if (text.includes('sleep') || text.includes('insomnia')) {
    return 'For better sleep, try keeping a regular sleep schedule, making your bedroom comfortable, and reducing screen time before bed. If sleep problems continue or affect your daily life, consider speaking with a healthcare professional.'
  }

  if (text.includes('water') || text.includes('hydration') || text.includes('drink')) {
    return 'To stay hydrated, drink water regularly throughout the day and pay attention to thirst. Your needs can change with activity, weather, and health conditions. Follow any fluid limits recommended by your healthcare professional.'
  }

  if (text.includes('exercise') || text.includes('fitness') || text.includes('workout')) {
    return 'Start with activity that matches your current ability, such as a comfortable walk. Increase activity gradually and take rest when needed. If you have a health condition or symptoms during exercise, ask a healthcare professional what is appropriate for you.'
  }

  if (text.includes('stress') || text.includes('anxiety') || text.includes('relax')) {
    return 'You could try slow breathing, a short walk, a relaxing activity, or talking with someone you trust. If stress or anxiety feels overwhelming or continues for a long time, consider seeking support from a qualified professional.'
  }

  if (text.includes('food') || text.includes('diet') || text.includes('nutrition') || text.includes('eat')) {
    return 'A balanced eating pattern often includes a variety of vegetables, fruits, whole grains, and suitable sources of protein. Individual needs differ, especially with medical conditions, so a qualified dietitian or healthcare professional can provide personal advice.'
  }

  if (text.includes('headache') || text.includes('pain') || text.includes('fever') || text.includes('symptom')) {
    return 'I can only provide general information, and I cannot diagnose symptoms. New, severe, worsening, or unexplained symptoms should be assessed by a healthcare professional. Seek emergency care for severe symptoms such as difficulty breathing, fainting, or severe chest pain.'
  }

  if (text.includes('medicine') || text.includes('medication') || text.includes('tablet') || text.includes('drug')) {
    return 'For medication questions, follow the instructions provided by your prescribing healthcare professional or pharmacist. Do not start, stop, or change a prescribed medicine based only on this demo assistant.'
  }

  return 'Thanks for your question! I am currently using sample responses and cannot give a reliable answer to every health question. For advice specific to your health, please speak with a qualified healthcare professional.'
}

function HealthChat() {
  const [messages, setMessages] = useState(initialMessages)
  const [question, setQuestion] = useState('')
  const [isDemoTyping, setIsDemoTyping] = useState(false)
  const [notice, setNotice] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isDemoTyping])

  const sendMessage = (text = question) => {
    const cleanedQuestion = text.trim()

    if (!cleanedQuestion || isDemoTyping) return

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: cleanedQuestion
    }

    setMessages((previous) => [...previous, userMessage])
    setQuestion('')
    setNotice('')
    setIsDemoTyping(true)

    // This is a local demo response, not a real AI service.
    const response = getDemoResponse(cleanedQuestion)

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now() + 1,
        sender: 'assistant',
        text: response
      }
    ])

    setIsDemoTyping(false)
  }

  const clearChat = () => {
    setMessages(initialMessages)
    setNotice('Demo conversation cleared.')
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-6 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-5xl">

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Heading */}
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[#E8EFE5] p-3">
              <Bot size={30} />
            </div>
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">
                Health Assistant
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Your general wellness information companion
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={clearChat}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 text-sm font-semibold hover:bg-[#F2F5EF]"
          >
            <Trash2 size={17} />
            Clear Chat
          </button>
        </div>

        {/* Safety notice */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E3E8DF] bg-white p-4">
          <ShieldCheck size={22} className="mt-0.5 shrink-0 text-[#64816A]" />
          <div>
            <p className="font-semibold">General information only</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This page uses predefined demo replies. It is not a real AI
              service, cannot diagnose conditions, and does not replace
              professional medical care. Do not enter private medical details.
            </p>
          </div>
        </div>

        {/* Chat window */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-[#E3E8DF] bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b border-[#EDF0E9] bg-[#F5F7F1] p-4 sm:p-5">
            <div className="rounded-full bg-[#183D32] p-2 text-white">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="font-bold">HealthNest Assistant</h2>
              <p className="text-xs text-[#64816A]">
                Demo mode · Prewritten responses
              </p>
            </div>
          </div>

          <div
            className="h-[420px] space-y-5 overflow-y-auto p-4 sm:p-6"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`shrink-0 rounded-full p-2 ${
                    message.sender === 'user'
                      ? 'bg-[#E8EFE5]'
                      : 'bg-[#183D32] text-white'
                  }`}
                >
                  {message.sender === 'user' ? (
                    <UserRound size={18} />
                  ) : (
                    <Bot size={18} />
                  )}
                </div>

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[75%] ${
                    message.sender === 'user'
                      ? 'rounded-tr-sm bg-[#183D32] text-white'
                      : 'rounded-tl-sm bg-[#F2F5EF] text-[#183D32]'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isDemoTyping && (
              <p className="text-sm text-gray-500">
                Preparing demo response...
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          <div className="border-t border-[#EDF0E9] px-4 py-4 sm:px-6">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <MessageCircle size={17} />
              Try asking
            </div>

            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  disabled={isDemoTyping}
                  onClick={() => sendMessage(item)}
                  className="rounded-full border border-[#DCE5D9] px-3 py-2 text-left text-xs text-[#64816A] transition hover:bg-[#F2F5EF] disabled:opacity-50 sm:text-sm"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Message input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="mt-4 flex items-end gap-3"
            >
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    sendMessage()
                  }
                }}
                placeholder="Type a general wellness question..."
                rows={2}
                maxLength={500}
                className="min-w-0 flex-1 resize-none rounded-2xl border border-[#DCE5D9] px-4 py-3 text-sm outline-none focus:border-[#64816A]"
                aria-label="Your question"
              />

              <button
                type="submit"
                disabled={!question.trim() || isDemoTyping}
                aria-label="Send message"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#183D32] text-white transition hover:bg-[#285746] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={19} />
              </button>
            </form>

            <p className="mt-2 text-xs text-gray-400">
              Press Enter to send · Shift + Enter for a new line
            </p>

            {notice && (
              <p role="status" className="mt-3 text-sm text-[#64816A]">
                {notice}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default HealthChat
