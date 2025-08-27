const ChatHeader = ({ currentRoom }) => {
    return (
        <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">
                            {currentRoom?.type === 'private' ? '🔒' : '#'}
                        </span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">
                            {currentRoom?.name}
                        </h1>
                        <p className="text-sm text-gray-500">
                            {currentRoom?.members} miembros • {currentRoom?.type === 'private' ? 'Privado' : 'Público'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Phone />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Video />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Settings />
                    </button>
                </div>
            </div>
        </div>
    );
};