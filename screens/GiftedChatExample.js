import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Avatar, IMessage } from 'react-native-gifted-chat'
import BubleChat from '../component/bubleChat/bubleChat.js'
import { View, Image } from 'react-native'
import ChatNote from '../component/chatNote.js';
import InputMessageArea from '../component/inputMessageArea.js'

export function GiftedChatExample() {
  const [messages, setMessages] = useState([]);
  const myId = 1
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
        },
      },
      {
        _id: 2,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
        },
      },
      {
        _id: 3,
        text: 'Sender: Hello from me',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 4,
        text: 'Sender: Hello',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        }
      },
      {
        _id: 5,
        text: 'Note',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        note: {
          name: 'Smith note',
          time: '8:00 PM',
          content: 'Enim pariatur voluptate deserunt pariatur sint nisi. Pariatur cupidatat enim id consequat adipisicing commodo cillum nisi dolore sit anim. Ea irure do occaecat enim excepteur qui duis culpa sint commodo consectetur. Officia exercitation laborum officia aliquip ut occaecat culpa aute labore id quis consectetur occaecat excepteur. Et sint quis do ex tempor ex veniam deserunt cillum excepteur velit est nostrud. Duis mollit ipsum ullamco non pariatur in.'
        }
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const customBubleChat = useCallback((currentMessage) => {
    const { avatar, _id } = currentMessage.user
    const { text, note } = currentMessage
    
    if (note !== undefined) {
      const { name, time, content } = note
      return ( <ChatNote name={name} time={time} content={content}/>)
    }
    return (
      <BubleChat
          uri={avatar}
          content={text}
          theme={_id == myId ? 'SENDER': 'RECEIVER'}
          showImage={false}
      />
    )
  })

  const handleRenderInputToolbar = useCallback((currentMessage) => {
    return (
      <InputMessageArea />
    )
  })

  
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: myId,
      }}
      renderAvatar={() => (
        <View style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30, 
              borderRadius: 15,
            }}
            source={{
                uri: "https://randomuser.me/api/portraits/men/99.jpg",
            }}
        />
        </View>
      )}
      minInputToolbarHeight={56}
      showAvatarForEveryMessage={true}
      renderBubble={({currentMessage}) => customBubleChat(currentMessage)}
      renderInputToolbar={() => handleRenderInputToolbar()}
    />
  )
}