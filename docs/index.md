# LTRCOL-2011: AI by Design for Collaboration

<div class="hero-banner" style="position:relative;border-radius:18px;padding:2.2rem 1.4rem 2rem;margin:1.2rem 0 2.4rem;background:linear-gradient(135deg,#004d66 0%,#0288d1 45%,#7b1fa2 100%);color:#fff;overflow:hidden;text-align:center;box-shadow:0 12px 32px rgba(0,0,0,0.18);">

<div style="position:absolute;inset:0;opacity:0.10;pointer-events:none;background:radial-gradient(circle at 20% 0%, #fff 0, transparent 35%), radial-gradient(circle at 90% 100%, #fff 0, transparent 30%);"></div>

<div class="hero-ascii-wrap" style="margin:0 auto 1.1rem;color:rgba(255,255,255,0.95);font-family:'SFMono-Regular','Menlo','Consolas',monospace;line-height:1.05;letter-spacing:0;text-shadow:0 0 14px rgba(255,255,255,0.18);display:flex;flex-direction:column;align-items:center;text-align:center;">
<pre class="hero-ascii" style="margin:0;white-space:pre;display:inline-block;text-align:left;">
 █████╗ ██╗    ██████╗ ██╗   ██╗
██╔══██╗██║    ██╔══██╗╚██╗ ██╔╝
███████║██║    ██████╔╝ ╚████╔╝
██╔══██║██║    ██╔══██╗  ╚██╔╝
██║  ██║██║    ██████╔╝   ██║
╚═╝  ╚═╝╚═╝    ╚═════╝    ╚═╝
</pre>
<pre class="hero-ascii" style="margin:0.3rem 0 0;white-space:pre;display:inline-block;text-align:left;">
██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
</pre>
</div>

<div style="font-size:0.78rem;font-weight:700;letter-spacing:0.32em;color:rgba(255,255,255,0.78);margin-bottom:0.4rem;">LTRCOL-2011</div>

<div class="hero-title" style="font-weight:800;line-height:1.15;margin:0 0 0.6rem;color:#fff;">AI by Design for Collaboration</div>

<div class="hero-tagline" style="color:rgba(255,255,255,0.92);max-width:640px;margin:0 auto 1.4rem;line-height:1.5;">Hands-on AI for Cisco Webex Messaging, built with LangChain, Google Colab, and a few lines of Python.</div>

<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:0.5rem;">
<span style="font-size:0.78rem;font-weight:700;color:#0288d1;background:#fff;padding:0.35rem 0.9rem;border-radius:24px;letter-spacing:0.04em;">⚡ CISCO LIVE US 2026</span>
<span style="font-size:0.78rem;font-weight:700;color:#fff;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.35);padding:0.35rem 0.9rem;border-radius:24px;letter-spacing:0.04em;backdrop-filter:blur(4px);">2 MODULES · ~95 MIN</span>
<span style="font-size:0.78rem;font-weight:700;color:#fff;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.35);padding:0.35rem 0.9rem;border-radius:24px;letter-spacing:0.04em;backdrop-filter:blur(4px);">🐍 PYTHON · LANGCHAIN · WEBEX APIs</span>
</div>

</div>

<style>
/* Container-query sizing: ASCII font scales with the hero card's actual width.
   Falls back to viewport-based sizing on browsers without container queries. */
.hero-banner { container-type: inline-size; }
.hero-ascii { font-size: clamp(0.34rem, 2.2cqw, 0.85rem); }
.hero-title { font-size: clamp(1.3rem, 4cqw, 2rem); }
.hero-tagline { font-size: clamp(0.85rem, 2cqw, 1rem); }
@supports not (container-type: inline-size) {
  .hero-ascii { font-size: clamp(0.34rem, 1.6vw, 0.85rem); }
  .hero-title { font-size: clamp(1.3rem, 3.2vw, 2rem); }
  .hero-tagline { font-size: clamp(0.85rem, 1.5vw, 1rem); }
}
@media (max-width: 380px) {
  .hero-ascii { font-size: 0.32rem; }
}
</style>

<div style="margin:2rem 0 2.5rem 0;" markdown>

<h2 style="margin-bottom:0.2rem;">Your Lab Proctors</h2>
<p style="color:var(--md-default-fg-color--light);margin-bottom:1.2rem;font-size:0.92rem;">Need help? Reach out to any of us.</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;">

<div class="proctor-card" style="background:var(--md-code-bg-color, #f5f5f5);border-radius:10px;padding:1.2rem 1rem;text-align:center;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);cursor:default;position:relative;">
<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#009688,#00796b);margin:0 auto 0.7rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.2rem;">OI</div>
<div style="font-weight:700;font-size:1rem;line-height:1.3;">Omer Ilyas</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.2rem;">Technical Marketing Engineer</div>
<div class="proctor-email" style="font-size:0.75rem;margin-top:0.5rem;padding:0.25rem 0.5rem;background:rgba(0,150,136,0.12);border-radius:4px;color:#049fd9;max-height:0;overflow:hidden;opacity:0;transition:all 0.3s;">oilyas@cisco.com</div>
</div>

<div class="proctor-card" style="background:var(--md-code-bg-color, #f5f5f5);border-radius:10px;padding:1.2rem 1rem;text-align:center;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);cursor:default;position:relative;">
<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#0288d1,#01579b);margin:0 auto 0.7rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.2rem;">KB</div>
<div style="font-weight:700;font-size:1rem;line-height:1.3;">Kevin Barrow</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.2rem;">Technical Marketing Engineer</div>
<div class="proctor-email" style="font-size:0.75rem;margin-top:0.5rem;padding:0.25rem 0.5rem;background:rgba(2,136,209,0.12);border-radius:4px;color:#049fd9;max-height:0;overflow:hidden;opacity:0;transition:all 0.3s;">kebarrow@cisco.com</div>
</div>

<div class="proctor-card" style="background:var(--md-code-bg-color, #f5f5f5);border-radius:10px;padding:1.2rem 1rem;text-align:center;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);cursor:default;position:relative;">
<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#7b1fa2,#4a148c);margin:0 auto 0.7rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.2rem;">HA</div>
<div style="font-weight:700;font-size:1rem;line-height:1.3;">Hussain Ali</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.2rem;">Technical Marketing Engineer</div>
<div class="proctor-email" style="font-size:0.75rem;margin-top:0.5rem;padding:0.25rem 0.5rem;background:rgba(123,31,162,0.12);border-radius:4px;color:#049fd9;max-height:0;overflow:hidden;opacity:0;transition:all 0.3s;">husali@cisco.com</div>
</div>

<div class="proctor-card" style="background:var(--md-code-bg-color, #f5f5f5);border-radius:10px;padding:1.2rem 1rem;text-align:center;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);cursor:default;position:relative;">
<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#e65100,#bf360c);margin:0 auto 0.7rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.2rem;">SL</div>
<div style="font-weight:700;font-size:1rem;line-height:1.3;">Shane Long</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.2rem;">Technical Marketing Engineer</div>
<div class="proctor-email" style="font-size:0.75rem;margin-top:0.5rem;padding:0.25rem 0.5rem;background:rgba(230,81,0,0.12);border-radius:4px;color:#049fd9;max-height:0;overflow:hidden;opacity:0;transition:all 0.3s;">shalong@cisco.com</div>
</div>

<div class="proctor-card" style="background:var(--md-code-bg-color, #f5f5f5);border-radius:10px;padding:1.2rem 1rem;text-align:center;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);cursor:default;position:relative;">
<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#3949ab,#1a237e);margin:0 auto 0.7rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.2rem;">VY</div>
<div style="font-weight:700;font-size:1rem;line-height:1.3;">Venky Yechuri</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.2rem;">Technical Projects Systems Engineer</div>
<div class="proctor-email" style="font-size:0.75rem;margin-top:0.5rem;padding:0.25rem 0.5rem;background:rgba(57,73,171,0.12);border-radius:4px;color:#049fd9;max-height:0;overflow:hidden;opacity:0;transition:all 0.3s;">vyechuri@cisco.com</div>
</div>

</div>
</div>

<h2 style="margin-bottom:0.2rem;">Lab Modules</h2>
<p style="color:var(--md-default-fg-color--light);margin-bottom:1.2rem;font-size:0.92rem;">2 modules &middot; ~95 minutes &middot; Hands-on AI for Webex Messaging with LangChain</p>

<div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:1rem;margin-bottom:2rem;">

<a href="module-1-setup-your-lab-environment/" class="module-card" style="--accent:#009688;text-decoration:none;color:inherit;display:flex;">
<div class="module-card-inner" style="background:var(--md-code-bg-color, #f5f5f5);border-radius:12px;padding:1.2rem 1.3rem;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);border-left:4px solid #009688;cursor:pointer;width:100%;display:flex;flex-direction:column;">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">
<span style="font-size:0.75rem;font-weight:700;color:#fff;background:#009688;padding:0.15rem 0.6rem;border-radius:20px;">MODULE 1</span>
<span style="font-size:0.78rem;font-weight:600;color:var(--md-default-fg-color--light);">30 min</span>
</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.4;">Setup your Lab Environment</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.3rem;">Webex token, Google Colab, OpenAI API key, plus primers on Streamlit and ngrok</div>
<div class="module-card-hint" style="margin-top:0.6rem;font-size:0.7rem;font-weight:700;letter-spacing:0.06em;color:#009688;text-transform:uppercase;opacity:0.85;">▾ Hover to see tasks</div>
<div class="module-card-tasks">
<div style="font-size:0.7rem;font-weight:700;letter-spacing:0.06em;color:#009688;text-transform:uppercase;margin:0.6rem 0 0.45rem;">Tasks in this module</div>
<div style="display:flex;flex-direction:column;gap:0.25rem;font-size:0.78rem;color:var(--md-default-fg-color);line-height:1.45;">
<div><span style="font-weight:700;color:#009688;">1a</span> &middot; Webex Developer Portal Setup</div>
<div><span style="font-weight:700;color:#009688;">1b</span> &middot; Google Colab Setup</div>
<div><span style="font-weight:700;color:#009688;">1c</span> &middot; Managing API Keys in Colab</div>
<div><span style="font-weight:700;color:#009688;">1d</span> &middot; Introduction to Streamlit</div>
<div><span style="font-weight:700;color:#009688;">1e</span> &middot; Introduction to ngrok</div>
</div>
</div>
</div>
</a>

<a href="module-2-langchain-for-messaging-intelligence/" class="module-card" style="--accent:#0288d1;text-decoration:none;color:inherit;display:flex;">
<div class="module-card-inner" style="background:var(--md-code-bg-color, #f5f5f5);border-radius:12px;padding:1.2rem 1.3rem;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);border-left:4px solid #0288d1;cursor:pointer;width:100%;display:flex;flex-direction:column;">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">
<span style="font-size:0.75rem;font-weight:700;color:#fff;background:#0288d1;padding:0.15rem 0.6rem;border-radius:20px;">MODULE 2</span>
<span style="font-size:0.78rem;font-weight:600;color:var(--md-default-fg-color--light);">65 min</span>
</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.4;">LangChain for Messaging Intelligence</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.3rem;">Read Webex messages as Documents, then build a RAG-based Ask Me Anything for any space</div>
<div class="module-card-hint" style="margin-top:0.6rem;font-size:0.7rem;font-weight:700;letter-spacing:0.06em;color:#0288d1;text-transform:uppercase;opacity:0.85;">▾ Hover to see tasks</div>
<div class="module-card-tasks">
<div style="font-size:0.7rem;font-weight:700;letter-spacing:0.06em;color:#0288d1;text-transform:uppercase;margin:0.6rem 0 0.45rem;">Tasks in this module</div>
<div style="display:flex;flex-direction:column;gap:0.25rem;font-size:0.78rem;color:var(--md-default-fg-color);line-height:1.45;">
<div><span style="font-weight:700;color:#0288d1;">2a</span> &middot; Connect LangChain to Webex Messaging</div>
<div><span style="font-weight:700;color:#0288d1;">2b</span> &middot; Ask Me Anything for Webex Spaces</div>
<div><span style="font-weight:700;color:#0288d1;">2c</span> &middot; Generate Space Summaries</div>
</div>
</div>
</div>
</a>

</div>

<style>
.module-card-inner {
  transition: box-shadow 0.2s, transform 0.2s;
}
.module-card:hover .module-card-inner {
  box-shadow: 0 6px 22px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}
/* Hidden by default, revealed on hover via grid-rows trick */
.module-card-tasks {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s ease, opacity 0.25s ease;
  opacity: 0;
}
.module-card-tasks > * { min-height: 0; }
.module-card:hover .module-card-tasks {
  grid-template-rows: 1fr;
  opacity: 1;
}
.module-card:hover .module-card-hint { display: none; }
@media (hover: none) {
  /* Touch devices: always show the task list, hide the hover hint */
  .module-card-tasks { grid-template-rows: 1fr; opacity: 1; }
  .module-card-hint { display: none; }
}
</style>

<h2 style="margin-bottom:0.2rem;">Getting Started</h2>
<p style="color:var(--md-default-fg-color--light);margin-bottom:1.2rem;font-size:0.92rem;">Two steps to begin your lab journey</p>

<div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:1rem;margin-bottom:1.2rem;">

<a href="about-this-lab/" style="text-decoration:none;color:inherit;display:flex;">
<div style="background:var(--md-code-bg-color, #f5f5f5);border-radius:12px;padding:1.5rem 1.3rem 1.3rem;text-align:center;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);transition:box-shadow 0.2s,transform 0.2s;cursor:pointer;display:flex;flex-direction:column;align-items:center;width:100%;height:240px;" onmouseover="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.10)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='none';this.style.transform='none'">
<div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#009688,#00796b);margin-bottom:0.8rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:1.3rem;flex-shrink:0;">1</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.3;">Read the Overview</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.3rem;">Understand the lab scope and goals</div>
</div>
</a>

<a href="module-1-setup-your-lab-environment/" style="text-decoration:none;color:inherit;display:flex;">
<div style="background:var(--md-code-bg-color, #f5f5f5);border-radius:12px;padding:1.5rem 1.3rem 1.3rem;text-align:center;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);transition:box-shadow 0.2s,transform 0.2s;cursor:pointer;display:flex;flex-direction:column;align-items:center;width:100%;height:240px;" onmouseover="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.10)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='none';this.style.transform='none'">
<div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#7b1fa2,#4a148c);margin-bottom:0.8rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:1.3rem;flex-shrink:0;">2</div>
<div style="font-weight:700;font-size:0.95rem;line-height:1.3;">Start Module 1</div>
<div style="font-size:0.8rem;color:var(--md-default-fg-color--light);margin-top:0.3rem;">Set up your Webex token and Google Colab</div>
</div>
</a>

</div>

<a href="project-task-board/" style="text-decoration:none;color:inherit;display:block;">
<div style="background:linear-gradient(135deg,#009688,#00796b);border-radius:12px;padding:1.1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;transition:box-shadow 0.2s,transform 0.2s;cursor:pointer;" onmouseover="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.15)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='none';this.style.transform='none'">
<div>
<div style="color:#fff;font-weight:700;font-size:0.95rem;">Project Task Board</div>
<div style="color:rgba(255,255,255,0.8);font-size:0.82rem;margin-top:0.15rem;">Track your progress across all modules</div>
</div>
<div style="color:#fff;font-size:1.4rem;">&#10132;</div>
</div>
</a>
