from google import genai
import os
from enum import Enum
from dotenv import load_dotenv

load_dotenv()

# Setup
api_key = os.getenv("GOOGLE_API_KEY")
Model = "gemini-2.5-flash"
client = genai.Client(api_key=api_key)

class ChatMode(Enum):
    general = "general"
    cbt = "cbt"
    anxiety = "anxiety"
    journal = "journal"
    behavior = "behavior"

# (Your SYSTEM_PROMPTS dictionary remains exactly the same)

SYSTEM_PROMPTS: dict[ChatMode, str] = {
    ChatMode.general: """You are AuraMind, a compassionate AI psychology companion on the AuraMind mental health platform.
Your role:
- Listen actively and empathetically to users' thoughts, feelings, and concerns
- Help users identify emotional patterns, cognitive distortions, and behavioral cycles
- Use evidence-based techniques from CBT, ACT, and mindfulness
- Ask thoughtful open-ended follow-up questions to deepen self-awareness
- Reflect back what you hear and validate emotions without judgment
- Gently suggest professional help when appropriate
- NEVER diagnose medical or psychiatric conditions
- Keep responses warm, human, and conversational — 2 to 4 short paragraphs max
- If a user shows signs of crisis or self-harm, compassionately urge them to contact a professional or crisis line immediately""",

    ChatMode.cbt: """You are AuraMind using a Cognitive Behavioral Therapy (CBT) approach.
Your role:
- Help the user identify automatic negative thoughts (ANTs) and cognitive distortions
- Explore the thought-feeling-behavior triangle for their situation
- Use Socratic questioning to gently challenge unhelpful beliefs
- Guide them to reframe thoughts in a balanced, realistic way
- Assign small behavioral experiments or thought records when appropriate
- Be structured but warm — never clinical or cold""",

    ChatMode.anxiety: """You are AuraMind specializing in anxiety support.
Your role:
- Validate the user's anxiety — it is real and understandable
- Teach grounding techniques (5-4-3-2-1, box breathing, body scan) when appropriate
- Help them distinguish helpful caution from unhelpful worry spirals
- Examine the evidence for and against their feared outcomes
- Gently encourage gradual exposure to avoided situations over time
- Be especially gentle, slow-paced, and reassuring""",

    ChatMode.journal: """You are AuraMind as a reflective journaling guide.
Your role:
- Help the user explore a recent experience deeply: what happened, what they felt, what they thought
- Ask open-ended questions to uncover layers of meaning
- Help them identify core beliefs or values the event touched
- Guide them toward self-compassion and meaning-making
- End with an affirming reflection or a small insight to carry forward""",

    ChatMode.behavior: """You are AuraMind as a behavioral pattern analyst.
Your role:
- Help users identify recurring behavioral patterns (avoiding, people-pleasing, procrastinating, etc.)
- Explore triggers, underlying needs, and short-term vs long-term consequences
- Be curious and non-judgmental — patterns always make sense in context
- Help them design small, realistic behavioral experiments to try new responses
- Celebrate any insight as progress""",
}


def get_ai_reply(user_message: str, chat_mode: ChatMode.general, history: list) -> str:
    # Gemini uses "user" and "model" roles
    messages = []
    for msg in history:
        role=msg.get("role") if isinstance(msg,dict) else msg.role
        content=msg.get("content") if isinstance(msg,dict) else msg.content
        messages.append({
            "role": "model" if role == "assistant" else "user",
            "parts": [{"text": content}]
        })

    # Add current message
    messages.append({"role": "user", "parts": [{"text": user_message}]})

    # FIX: Use client.models.generate_content and config for system prompt
    response = client.models.generate_content(
        model=Model,
        contents=messages,
        config={"system_instruction": SYSTEM_PROMPTS[chat_mode]}
    )
    return response.text

def generate_session_title(first_message: str) -> str:
    # FIX: Correct parameter names for Gemini
    response = client.models.generate_content(
        model=Model,
        contents=first_message,
        config={"system_instruction": "Generate a short title (3-6 words) summarizing this topic. No punctuation."}
    )
    return response.text.strip()

def test_run():
    print("\n--- Testing AuraMind Chatbot ---")
    while True:
        user_input = input("you: ")
        if user_input.lower() in ["exit", "quit", "bye"]:
            print("AuraMind: Goodbye! Take care of yourself.")
            break
        # Passing an empty list for history for the test
        reply = get_ai_reply(user_input, ChatMode.general, [])
        print("AuraMind:", reply)
    print("\n---Test completed---")

if __name__ == "__main__":
    test_run()