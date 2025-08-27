const UsersList = ({ onlineUsers }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'online': return 'bg-green-500';
            case 'away': return 'bg-yellow-500';
            case 'busy': return 'bg-red-500';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                        <Users />
                        <span className="ml-2">Miembros ({onlineUsers.filter(u => u.status !== 'offline').length})</span>
                    </h3>
                </div>
            </div>
            
            <div className="p-4 space-y-3">
                {onlineUsers.map(user => (
                    <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
                                {user.avatar}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(user.status)} rounded-full border-2 border-white`}></div>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{user.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};