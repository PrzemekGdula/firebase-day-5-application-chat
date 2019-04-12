import React from 'react'
import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'

class Chat extends React.Component {
    state = {
        messages: null,
    }

    render() {
        return (
            <div>
                <MessagesList />
                <NewMessageForm />
            </div>
        )
    }
}
export default Chat