import React from 'react'
import Head from 'next/head'
import { ChatGPTLogo, PlusIcon } from '@/components/icons'
import { Avatar } from '@/components/avatar'

function Layout ({ children } : {children: React.ReactNode}) {
  return (
    <>
      <Head>
        <title>Chat GPT</title>
      </Head>
      <div className='w-full relative bg-gptgray h-screen'>
        <Aside />
        {children}
      </div>
    </>
  )
}

function Aside () {
  return (
    <aside className='bg-gptdarkgray fixed flex w-64 h-screen flex-col'>
      <nav className='flex flex-col flex-1 h-full p-2 space-y-1'>
        <button className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20'>
          <PlusIcon />
          New chat
        </button>
      </nav>
    </aside>
  )
}

function UserAvatar () {
  return (
    <img
      alt='Foto de user'
      src='https://pbs.twimg.com/profile_images/1266470955922206728/lkiD87dm_400x400.jpg'
    />
  )
}

function Message ({ ia, message } : {ia: boolean, message: string}) {
  const avatar = ia ? <ChatGPTLogo /> : <UserAvatar />

  return (
    <div className={`text-gray-100 ${ia ? 'bg-gptlightgray' : 'bg-gptgray'}`}>
      <article className='flex gap-4 p-6 m-auto max-w-3xl'>
        <Avatar>{avatar}</Avatar>

        <div className='min-h-[20px] flex flex-1 flex-col items-start gap-4 whitespace-pre-wrap'>
          <div className='prose-invert w-full break-words'>
            <p>{message}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

function Chat () {
  const messages = [{
    id: 1, ia: false, message: '¿Puedes explicar qué es Blockchain para alguien sin conocimientos avanzados de tecnología?'
  }, {
    id: 2,
    ia: true,
    message: '¡Por supuesto! Blockchain es una tecnología que permite crear registros digitales inmutables y seguros. Piensa en ella como un libro de contabilidad digital que registra transacciones de forma transparente y sin la necesidad de un intermediario.\n' +
            '\n' +
            'En lugar de que una sola persona o entidad tenga el control de los registros y pueda manipularlos a su antojo, en un blockchain los registros son compartidos y mantenidos por una red de participantes que validan y verifican cada transacción.\n' +
            '\n' +
            'Esto hace que sea muy difícil para alguien manipular o falsificar información en un blockchain, ya que cada registro está vinculado a los registros anteriores en la cadena, formando un registro permanente e inmutable.\n' +
            '\n' +
            'Una de las aplicaciones más conocidas de blockchain es la criptomoneda, como el Bitcoin, pero también se utiliza en muchas otras áreas, como la gestión de la cadena de suministro, la identificación digital y la votación en línea.'
  }]

  return (
    <div className='flex flex-col h-full flex-1 pl-64'>
      <main>
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </main>
      {/* <ChatForm /> */}
    </div>
  )
}

export default function Home () {
  return (
    <Layout>
      <Chat />
    </Layout>
  )
}
