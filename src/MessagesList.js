import React from 'react'

const MessagesList = (props) => {
    const messagesArray = (
        Object.entries(props.messages || {})
            .map(
                ([key, value]) => ({
                    ...value,
                    key,
                })
            )
    )

    return (
        <div>
            {
                messagesArray.map(
                    message => (
                        <div
                            key={message.key}
                        >
                            {message.text}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default MessagesList