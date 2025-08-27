const Sidebar = ({ currentUser, rooms, selectedRoom, setSelectedRoom, searchTerm, setSearchTerm }) => {
    return (
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="flex items-center space-x-3">
                    <div className="text-3xl">{currentUser.avatar}</div>
                    <div>
                        <h2 className="font-semibold text-white">{currentUser.name}</h2>
                        <p className="text-sm text-blue-100">Desarrollador Full Stack</p>
                    </div>
                </div>
            </div>

            <div className="p-4 border-b border-gray-200">
                <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Search />
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar en conversaciones..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Salas de Chat
                    </h3>
                    <div className="space-y-2">
                        {rooms.map(room => (
                            <div
                                key={room.id}
                                onClick={() => setSelectedRoom(room.id)}
                                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                    selectedRoom === room.id 
                                        ? 'bg-blue-50 border-2 border-blue-200 shadow-sm' 
                                        : 'hover:bg-gray-50'
                                }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                    room.type === 'private' ? 'bg-purple-100' : 'bg-blue-100'
                                }`}>
                                    <span className="text-lg">
                                        {room.type === 'private' ? '🔒' : '#'}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">{room.name}</h4>
                                    <p className="text-sm text-gray-500">
                                        {room.members} miembros
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};