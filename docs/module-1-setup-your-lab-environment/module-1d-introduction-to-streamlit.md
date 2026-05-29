# Module 1d: Introduction to Streamlit *(optional, for info only, not part of this lab)*

Toward the end of this lab, you'll wrap everything you've built (reading Webex messages, asking questions about a space, generating summaries, rewriting messages, and orchestrating an agent) into a small web app that you can actually click through. The framework we'll use for that web app is **Streamlit**.

This task is a quick read, no clicks required. Its purpose is to give you a mental model of what Streamlit is so the later modules feel familiar when you see it appear.

## What is Streamlit?

Streamlit is an open-source Python library that turns plain Python scripts into interactive web apps. Instead of writing HTML, CSS, and JavaScript, you write regular Python code and Streamlit renders it as a browser-based UI: text inputs, buttons, chat windows, charts, file uploads, and more.

A typical Streamlit app is a single `.py` file. You run it with one command, and a local web app opens in your browser.

```python
import streamlit as st

st.title("My First App")
name = st.text_input("What's your name?")
if name:
    st.write(f"Hello, {name}!")
```

That's it. No web server boilerplate, no front-end framework, no build step.

## Why we use it in this lab

Streamlit is a great fit for AI labs and proof-of-concept work because:

* **Fast to build:** Most of the AI logic you'll write in this lab is already Python. Streamlit lets you put a UI on top of it without context-switching to a different language or framework.
* **Built-in chat components:** Streamlit ships with `st.chat_input` and `st.chat_message`, which are designed exactly for LLM-powered chat experiences like the one you'll build for Webex.
* **Live reload:** As you edit your Python file, Streamlit re-renders the app automatically. The feedback loop is short, which is ideal for experimenting with prompts and chains.
* **Demo-friendly:** You can share your running app over the network so others can try it. Later in the lab, we'll pair Streamlit with **ngrok** to give your app a public URL that anyone can open.

## How it fits in the bigger picture

Throughout the lab you will:

1. Connect to Webex and pull messages (using the Webex APIs and your Bearer token from [1a](module-1a-webex-developer-portal.md)).
2. Use **LangChain** plus the OpenAI key from [1c](module-1c-managing-api-keys-in-colab.md) to summarize, answer questions, rewrite, and run an agent over those messages.
3. Wrap that LangChain logic in a **Streamlit** app so it feels like a real product, not a notebook.

You don't need to install or configure anything for Streamlit right now. We'll install it inside Colab when we get to the UI module, and the lab will provide the starter code. For now, just remember: **Streamlit = Python, but in a browser.**

!!! tip "Want to explore on your own?"
    The official Streamlit documentation is at [docs.streamlit.io](https://docs.streamlit.io){:target="_blank" rel="noopener"}. The "Get started" and "API reference" pages are the most useful.
