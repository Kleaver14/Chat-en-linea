const MessageList = ({ messages, currentUser, isTyping, messagesEndRef }) => {
    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex space-x-3 message-bubble ${
                        msg.user === currentUser.name ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {msg.avatar}
                    </div>
                    <div className={`flex-1 ${msg.user === currentUser.name ? 'text-right' : ''}`}>
                        <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-900 text-sm">
                                {msg.user}
                            </span>
                            <span className="text-xs text-gray-500">
                                {formatTime(msg.timestamp)}
                            </span>
                        </div>
                        <div
                            className={`inline-block p-3 rounded-lg max-w-md ${
                                msg.user === currentUser.name
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                    : 'bg-white border border-gray-200 text-gray-900'
                            } ${msg.type === 'file' ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                        >
                            {msg.type === 'file' ? (
                                <div className="flex items-center space-x-2">
                                    <Paperclip />
                                    <div>
                                        <p className="font-medium">{msg.fileName}</p>
                                        <p className="text-xs opacity-75">{msg.fileSize}</p>
                                    </div>
                                </div>
                            ) : (
                                <p className="leading-relaxed">{msg.content}</p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            
            {isTyping && (
                <div className="flex space-x-3 fade-in">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};