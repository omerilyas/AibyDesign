# Module 2: LangChain for Messaging Intelligence

<div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:1.5rem;flex-wrap:wrap;">
<span style="font-size:0.8rem;font-weight:700;color:#fff;background:#0288d1;padding:0.2rem 0.8rem;border-radius:20px;">2 tasks</span>
<span style="font-size:0.8rem;font-weight:600;color:var(--md-default-fg-color--light);">45 min estimated</span>
</div>

In earlier modules you explored Webex AI Assistant features such as **Ask Me Anything**, **Space Summaries**, **Smart Rewrite**, and **Translation**. These features show how AI can help users understand conversations, catch up quickly, improve communication, and work across languages.

In this module, we will take a step further and explore how AI frameworks like **LangChain** can be used to build simplified versions of these experiences using the **Webex Messaging APIs**.

Rather than treating AI as magic or a black box, we will break the experience down into building blocks:

* how to connect to Webex
* how to authenticate using an API token
* how to retrieve messages from a Webex space
* how to convert those messages into LangChain documents
* how those documents can later be used for RAG, summaries, rewrite, and agents

By the end of this module, you will understand how prompts, chains, retrievers, vector databases, tools, and agents come together to create intelligent messaging experiences.

## What You Will Build

In this module, you will build a simplified **Webex Messaging Intelligence Assistant** using LangChain. Across the six tasks below, each one stacks on the last, until you have a real, working AI assistant for your Webex spaces.

<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1rem;margin:1.2rem 0 1.8rem;">

<a href="module-2a-connect-langchain-to-webex-messaging/" style="text-decoration:none;color:inherit;display:flex;">
<div style="background:linear-gradient(135deg, rgba(0,150,136,0.10), rgba(0,150,136,0.02));border-radius:12px;padding:1rem 1.1rem;border:1px solid rgba(0,150,136,0.25);border-left:5px solid #009688;width:100%;display:flex;flex-direction:column;transition:box-shadow 0.2s,transform 0.2s;cursor:pointer;" onmouseover="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.10)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='none';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;flex-wrap:wrap;">
<span style="font-size:1.1rem;">📥</span>
<span style="font-size:0.7rem;font-weight:700;color:#fff;background:#009688;padding:0.15rem 0.55rem;border-radius:20px;letter-spacing:0.04em;">TASK 1</span>
<span style="font-size:0.65rem;font-weight:700;color:#009688;background:rgba(0,150,136,0.15);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">2a</span>
</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.35;color:var(--md-default-fg-color);">Read Webex Messages</div>
<div style="font-size:0.78rem;color:var(--md-default-fg-color--light);margin-top:0.4rem;line-height:1.45;">API access, authentication, data ingestion, LangChain documents</div>
</div>
</a>

<a href="module-2b-ask-me-anything-webex-spaces/" style="text-decoration:none;color:inherit;display:flex;">
<div style="background:linear-gradient(135deg, rgba(2,136,209,0.10), rgba(2,136,209,0.02));border-radius:12px;padding:1rem 1.1rem;border:1px solid rgba(2,136,209,0.25);border-left:5px solid #0288d1;width:100%;display:flex;flex-direction:column;transition:box-shadow 0.2s,transform 0.2s;cursor:pointer;" onmouseover="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.10)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='none';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;flex-wrap:wrap;">
<span style="font-size:1.1rem;">🔍</span>
<span style="font-size:0.7rem;font-weight:700;color:#fff;background:#0288d1;padding:0.15rem 0.55rem;border-radius:20px;letter-spacing:0.04em;">TASK 2</span>
<span style="font-size:0.65rem;font-weight:700;color:#0288d1;background:rgba(2,136,209,0.15);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">2b</span>
</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.35;color:var(--md-default-fg-color);">Ask Me Anything for Webex Spaces</div>
<div style="font-size:0.78rem;color:var(--md-default-fg-color--light);margin-top:0.4rem;line-height:1.45;">RAG, embeddings, vector database</div>
</div>
</a>

<div style="background:linear-gradient(135deg, rgba(123,31,162,0.10), rgba(123,31,162,0.02));border-radius:12px;padding:1rem 1.1rem;border:1px solid rgba(123,31,162,0.25);border-left:5px solid #7b1fa2;opacity:0.75;">
<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;flex-wrap:wrap;">
<span style="font-size:1.1rem;">📝</span>
<span style="font-size:0.7rem;font-weight:700;color:#fff;background:#7b1fa2;padding:0.15rem 0.55rem;border-radius:20px;letter-spacing:0.04em;">TASK 3</span>
<span style="font-size:0.65rem;font-weight:700;color:#7b1fa2;background:rgba(123,31,162,0.15);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">2c</span>
<span style="font-size:0.6rem;font-weight:700;color:var(--md-default-fg-color--light);background:var(--md-default-fg-color--lightest, #e0e0e0);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">COMING SOON</span>
</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.35;color:var(--md-default-fg-color);">Generate Space Summaries</div>
<div style="font-size:0.78rem;color:var(--md-default-fg-color--light);margin-top:0.4rem;line-height:1.45;">Prompt templates, chains</div>
</div>

<div style="background:linear-gradient(135deg, rgba(230,81,0,0.10), rgba(230,81,0,0.02));border-radius:12px;padding:1rem 1.1rem;border:1px solid rgba(230,81,0,0.25);border-left:5px solid #e65100;opacity:0.75;">
<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;flex-wrap:wrap;">
<span style="font-size:1.1rem;">✏️</span>
<span style="font-size:0.7rem;font-weight:700;color:#fff;background:#e65100;padding:0.15rem 0.55rem;border-radius:20px;letter-spacing:0.04em;">TASK 4</span>
<span style="font-size:0.65rem;font-weight:700;color:#e65100;background:rgba(230,81,0,0.15);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">2d</span>
<span style="font-size:0.6rem;font-weight:700;color:var(--md-default-fg-color--light);background:var(--md-default-fg-color--lightest, #e0e0e0);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">COMING SOON</span>
</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.35;color:var(--md-default-fg-color);">Rewrite Webex Messages</div>
<div style="font-size:0.78rem;color:var(--md-default-fg-color--light);margin-top:0.4rem;line-height:1.45;">Prompt engineering</div>
</div>

<div style="background:linear-gradient(135deg, rgba(198,40,40,0.10), rgba(198,40,40,0.02));border-radius:12px;padding:1rem 1.1rem;border:1px solid rgba(198,40,40,0.25);border-left:5px solid #c62828;opacity:0.75;">
<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;flex-wrap:wrap;">
<span style="font-size:1.1rem;">🤖</span>
<span style="font-size:0.7rem;font-weight:700;color:#fff;background:#c62828;padding:0.15rem 0.55rem;border-radius:20px;letter-spacing:0.04em;">TASK 5</span>
<span style="font-size:0.65rem;font-weight:700;color:#c62828;background:rgba(198,40,40,0.15);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">2e</span>
<span style="font-size:0.6rem;font-weight:700;color:var(--md-default-fg-color--light);background:var(--md-default-fg-color--lightest, #e0e0e0);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">COMING SOON</span>
</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.35;color:var(--md-default-fg-color);">Agentic Messaging Assistant</div>
<div style="font-size:0.78rem;color:var(--md-default-fg-color--light);margin-top:0.4rem;line-height:1.45;">Tools, agents, reasoning</div>
</div>

<div style="background:linear-gradient(135deg, rgba(106,27,154,0.10), rgba(255,179,0,0.05));border-radius:12px;padding:1rem 1.1rem;border:1px solid rgba(106,27,154,0.25);border-left:5px solid #6a1b9a;opacity:0.75;">
<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;flex-wrap:wrap;">
<span style="font-size:1.1rem;">🚀</span>
<span style="font-size:0.7rem;font-weight:700;color:#fff;background:#6a1b9a;padding:0.15rem 0.55rem;border-radius:20px;letter-spacing:0.04em;">TASK 6</span>
<span style="font-size:0.65rem;font-weight:700;color:#6a1b9a;background:rgba(106,27,154,0.15);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">2f</span>
<span style="font-size:0.65rem;font-weight:700;color:#6a1b9a;background:rgba(106,27,154,0.12);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">OPTIONAL</span>
<span style="font-size:0.6rem;font-weight:700;color:var(--md-default-fg-color--light);background:var(--md-default-fg-color--lightest, #e0e0e0);padding:0.1rem 0.45rem;border-radius:20px;letter-spacing:0.04em;">COMING SOON</span>
</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.35;color:var(--md-default-fg-color);">Streamlit UI for Your Assistant</div>
<div style="font-size:0.78rem;color:var(--md-default-fg-color--light);margin-top:0.4rem;line-height:1.45;">ngrok, Streamlit, live assistant experience</div>
</div>

</div>

## Tasks in this module

- [ ] **Task 1 (2a):** [Connect LangChain to Webex Messaging (Read Webex Messages as AI Context)](module-2a-connect-langchain-to-webex-messaging.md)
- [ ] **Task 2 (2b):** [Ask Me Anything for Webex Spaces (RAG over Webex Conversations)](module-2b-ask-me-anything-webex-spaces.md)
