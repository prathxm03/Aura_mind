from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import uvicorn

# Import your functions and Enum from chatbot.py
from chatbot import get_ai_reply, generate_session_title, ChatMode

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    user_message: str
    chat_mode: ChatMode
    history: List[ChatMessage] = []

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        # Convert Pydantic objects into a list of dictionaries 
        # because the Google AI SDK doesn't understand Pydantic objects directly.
        formatted_history = [
            {"role": msg.role, "content": msg.content} 
            for msg in request.history
        ]

        reply = get_ai_reply(
            user_message=request.user_message,
            chat_mode=request.chat_mode,
            history=formatted_history
        )
        return {"reply": reply}
    except Exception as e:
        # Crucial for 500 errors: This tells you EXACTLY what failed in the terminal
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def status():
    return {"status": "AuraMind API is running"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)