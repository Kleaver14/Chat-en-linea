const MessageInput = ({ 
    message, 
    setMessage, 
    sendMessage, 
    currentRoom, 
    showEmojiPicker, 
    setShowEmojiPicker,
    handleFileUpload,
    fileInputRef,
    addEmoji
}) => {
    return (
        <>
            {/* Emoji Picker */}
            {showEmojiPicker && (
                <div className="absolute bottom-20 left-4 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 z-50 max-h-60 overflow-y-auto">
                    <h3 className="font-semibold text-gray-700 mb-3">Seleccionar Emoji</h3>
                    <div className="grid grid-cols-8 gap-2">
                        {emojis.map((emoji, index) => (
                            <button
                                key={index}
                                onClick={() => addEmoji(emoji)}
                                className="text-2xl hover:bg-gray-100 rounded p-2 transition-colors"
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input */}
            <div className="bg-white border-t border-gray-200 p-4">
                <div className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                        <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                className="hidden"
                                accept="image/*,.pdf,.doc,.docx,.txt"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Paperclip />
                            </button>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        sendMessage(e);
                                    }
                                }}
                                placeholder={`Escribe un mensaje en #${currentRoom?.name}...`}
                                className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
                                maxLength={1000}
                            />
                            <button
                                type="button"
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Smile />
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={sendMessage}
                        disabled={!message.trim()}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        <Send />
                    </button>
                </div>
                <div className="flex justify-between items-center mt-2 px-2">
                    <p className="text-xs text-gray-500">
                        Presiona Enter para enviar
                    </p>
                    <p className="text-xs text-gray-400">
                        {message.length}/1000
                    </p>
                </div>
            </div>
        </>
    );
};