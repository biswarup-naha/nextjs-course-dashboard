
'use client';

import React,{ useEffect } from 'react';

export default function ChatWidget() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/biswarup-capsi/svelte-chatbot-widget@master/dist/chat-widget.iife.js';
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return React.createElement('chat-widget');;
}