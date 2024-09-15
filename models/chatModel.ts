export interface ChatMessage {
    role: 'user' | 'model',
    parts: string;
}

export interface ChatHistory {
    history: ChatMessage[];
}

export interface ChatRequest{
    history: ChatMessage [], 
    question: string;
}


