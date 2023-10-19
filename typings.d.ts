interface Message {
    text: string;
    timestamp: admin.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}