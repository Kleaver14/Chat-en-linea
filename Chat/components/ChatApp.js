const ChatApp = () => {
    const { useState, useEffect, useRef } = React;
    
    const [selectedRoom, setSelectedRoom] = useState('general');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(initialMessages);
    const [rooms] = useState(initialRooms);
    const [onlineUsers] = useState(initialUsers);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages, selectedRoom]);

    useEffect(() => {
        mockSocket.on('newMessage', (newMessage) => {
            setMessages(prev => ({
                ...prev,
                [selectedRoom]: [...(prev[selectedRoom] || []), {
                    ...newMessage,
                    id: Date.now(),
                    timestamp: new Date()
                }]
            }));
        });

        const typingInterval = setInterval(() => {
            if (Math.random() > 0.8) {
                setIsTyping(true);
                setTimeout(() => setIsTyping(false), 2000);
            }
        }, 8000);

        return () => clearInterval(typingInterval);
    }, [selectedRoom]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                user: currentUser.name,
                avatar: currentUser.avatar,
                content: message,
                type: 'text',
                room: selectedRoom
            };

            mockSocket.emit('sendMessage', newMessage);
            setMessage('');
            setShowEmojiPicker(false);
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const newMessage = {
                user: currentUser.name,
                avatar: currentUser.avatar,
                content: `📎 ${file.name}`,
                type: 'file',
                fileName: file.name,
                fileSize: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
                room: selectedRoom
            };

            mockSocket.emit('sendMessage', newMessage);
        }
    };

    const addEmoji = (emoji) => {
        setMessage(prev => prev + emoji);
        setShowEmojiPicker(false);
    };

    const filteredMessages = (messages[selectedRoom] || []).filter(msg =>
        msg.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentRoom = rooms.find(room => room.id === selectedRoom);

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar Izquierdo */}
            <Sidebar 
                currentUser={currentUser}
                rooms={rooms}
                selectedRoom={selectedRoom}
                setSelectedRoom={setSelectedRoom}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* Área Principal */}
            <div className="flex-1 flex flex-col">
                <ChatHeader currentRoom={currentRoom} />
                
                <MessageList 
                    messages={filteredMessages}
                    currentUser={currentUser}
                    isTyping={isTyping}
                    messagesEndRef={messagesEndRef}
                />

                <MessageInput 
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                    currentRoom={currentRoom}
                    showEmojiPicker={showEmojiPicker}
                    setShowEmojiPicker={setShowEmojiPicker}
                    handleFileUpload={handleFileUpload}
                    fileInputRef={fileInputRef}
                    addEmoji={addEmoji}
                />
            </div>

            {/* Sidebar Derecho */}
            <UsersList onlineUsers={onlineUsers} />
        </div>
    );
};