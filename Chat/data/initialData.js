// Datos iniciales de la aplicación
const initialMessages = {
    general: [
        {
            id: 1,
            user: 'Ana García',
            avatar: '👩‍💼',
            content: '¡Hola a todos! ¿Cómo están?',
            timestamp: new Date(Date.now() - 300000),
            type: 'text'
        },
        {
            id: 2,
            user: 'Carlos López',
            avatar: '👨‍🔬',
            content: 'Todo bien por acá, trabajando en el nuevo proyecto',
            timestamp: new Date(Date.now() - 240000),
            type: 'text'
        },
        {
            id: 3,
            user: 'María Rodríguez',
            avatar: '👩‍🎨',
            content: '📎 diseño_mockup_v2.png',
            timestamp: new Date(Date.now() - 180000),
            type: 'file',
            fileName: 'diseño_mockup_v2.png',
            fileSize: '2.3 MB'
        }
    ],
    desarrollo: [
        {
            id: 4,
            user: 'Tech Lead',
            avatar: '👨‍💻',
            content: '¿Alguien ha revisado el PR del chat en tiempo real?',
            timestamp: new Date(Date.now() - 120000),
            type: 'text'
        }
    ],
    diseño: [
        {
            id: 5,
            user: 'UI Designer',
            avatar: '🎨',
            content: 'Subí los nuevos wireframes al Figma',
            timestamp: new Date(Date.now() - 60000),
            type: 'text'
        }
    ],
    random: [
        {
            id: 6,
            user: 'Kleaver Brenes',
            avatar: '👨‍💻',
            content: '¡El chat está funcionando perfectamente! 🎉',
            timestamp: new Date(Date.now() - 30000),
            type: 'text'
        }
    ]
};

const initialRooms = [
    { id: 'general', name: 'General', members: 12, type: 'public' },
    { id: 'desarrollo', name: 'Desarrollo', members: 5, type: 'private' },
    { id: 'diseño', name: 'Diseño', members: 3, type: 'private' },
    { id: 'random', name: 'Random', members: 8, type: 'public' }
];

const initialUsers = [
    { id: 1, name: 'Kleaver Brenes', avatar: '👨‍💻', status: 'online' },
    { id: 2, name: 'Ana García', avatar: '👩‍💼', status: 'online' },
    { id: 3, name: 'Carlos López', avatar: '👨‍🔬', status: 'away' },
    { id: 4, name: 'María Rodríguez', avatar: '👩‍🎨', status: 'online' },
    { id: 5, name: 'Tech Lead', avatar: '👨‍💻', status: 'busy' },
    { id: 6, name: 'UI Designer', avatar: '🎨', status: 'offline' }
];

const currentUser = {
    id: 1,
    name: 'Kleaver Brenes',
    avatar: '👨‍💻',
    status: 'online'
};

const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', 
    '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', 
    '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', 
    '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', 
    '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', 
    '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', 
    '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', 
    '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', 
    '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', 
    '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾', 
    '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
];