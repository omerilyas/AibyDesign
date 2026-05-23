# About this Lab: Building AI-Powered Messaging with LangChain & Webex

In Modules 1 to 4, you explored how Cisco Webex uses Artificial Intelligence to enhance collaboration experiences across Messaging, Calling, and Meetings. You experienced capabilities such as AI-powered message assistance, conversation summaries, smart rewrites, live translations, meeting intelligence, captions, transcriptions, and AI-generated insights.

While these features demonstrate what AI can do inside Webex, the next logical step is to understand how these experiences are actually built.

In this hands-on lab, we will take a step further and explore how modern AI frameworks (such as **LangChain**) can be used alongside the **Webex APIs** to build intelligent messaging workflows and agentic experiences.

You will learn how developers and architects can leverage AI models, orchestration frameworks, and APIs to create real-world conversational solutions within Webex Messaging.

## Throughout this lab, you will explore:

- **Webex Messaging APIs**: Understanding how applications interact with Webex spaces, users, and messages programmatically.
- **LangChain Fundamentals**: Learning how LangChain orchestrates prompts, memory, tools, and workflows to power AI applications.
- **Building AI-Powered Messaging Workflows**: Creating logic that can read, process, and respond to Webex messages intelligently.
- **Introduction to AI Agents**: Understanding how agents can reason, make decisions, and perform actions based on context and instructions.
- **Prompt Engineering & LLM Integration**: Connecting Large Language Models (LLMs) to Webex workflows for intelligent responses.

By the end of this lab, you will not only understand how AI features appear inside Webex, but also gain insight into how AI-powered experiences are designed, orchestrated, and built using frameworks like LangChain and Webex APIs.

!!! tip "The shift in mindset"
    Think of this module as moving from **"using AI"** to **"building AI."**

This lab is designed to provide a practical and approachable introduction to the foundations of **agentic AI**, helping you understand the core building blocks behind intelligent collaboration experiences.

## ✏️ Lab Notes (Floating Notepad)

To make life easier as you move through the lab, every page has a built-in **Lab Notes** notepad. Look for the small **pencil icon** in the bottom-right corner of any page.

<div style="background:linear-gradient(135deg, rgba(0,150,136,0.10), rgba(2,136,209,0.05));border-radius:12px;padding:1rem 1.2rem;border:1px solid rgba(0,150,136,0.25);border-left:5px solid #009688;margin:1rem 0 1.4rem;">

**Use it to keep things you'll need throughout the lab close at hand:**

* Your **Webex Bearer token** (so you don't have to re-grab it from the Developer Portal every time it expires)
* Your **Webex Space (Room) ID**
* Your **OpenAI API key**
* Your **ngrok auth token**
* Any **dCloud-assigned values** (the `cbXXX.dc-YY.com` domain, pod number, passwords)
* Snippets, scratch notes, or anything else you want to remember

</div>

!!! warning "Where your notes live"
    Notes are saved **only in your browser** (localStorage on this device). They will be **lost** if you:

    * clear your browser data,
    * use a different browser or computer,
    * open the lab in a private/incognito window.

    Treat the notepad as a temporary scratchpad for the duration of the lab. If you need notes that survive long-term, copy them to a personal note-taking app at the end of the session.

!!! danger "Be mindful with secrets"
    Even though the notepad is local to your browser, treat any **API keys, tokens, or passwords** the way you would on any shared workstation. If you're on a shared/dCloud machine, **clear your notes** before logging out so the next user can't see them.
