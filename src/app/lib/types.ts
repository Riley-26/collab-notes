export type UserLogin = {
    userId: string;
    username: string;
    password: string;
    email: string;
    isLoggedIn: boolean;
}

export type UserInfo = {
    userId: string;
    ownedNotes: string[];
    joinedNotes: string[];
    friends: string[];
}

export type Notes = {
    authorId: string;
    noteId: string;
    noteName: string;
    noteContents: string;
    newNoteEdits: { 
        userId: string,
        contents: string
    };
    isCollab: boolean;
    joinedUsers: { 
        userId: string,
        permission: "readonly" | "readandwrite" | "jointowner" | "author"
    };
}