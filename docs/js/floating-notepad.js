/**
 * Floating notepad with per-page notes stored in localStorage.
 * Accessible from every page via a button in the bottom-right corner.
 */
(function () {
  var STORAGE_KEY = "lab-notes";
  var isOpen = false;

  function loadNotes() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }

  function getPageKey() {
    // Use a clean page identifier from the path
    return window.location.pathname.replace(/\/$/, "") || "/";
  }

  function getPageTitle() {
    var h1 = document.querySelector("article h1");
    return h1 ? h1.textContent.trim() : document.title;
  }

  function init() {
    // Don't duplicate
    if (document.getElementById("notepad-fab")) return;

    // ── Floating action button ──────────────────────────────────────
    var fab = document.createElement("button");
    fab.id = "notepad-fab";
    fab.innerHTML = "&#9998;";
    fab.title = "Lab Notes";
    fab.style.cssText =
      "position:fixed;bottom:2rem;right:2rem;width:52px;height:52px;" +
      "border-radius:50%;border:none;cursor:pointer;z-index:9998;" +
      "background:var(--md-primary-fg-color, #009688);color:#fff;" +
      "font-size:1.4rem;display:flex;align-items:center;justify-content:center;" +
      "box-shadow:0 4px 16px rgba(0,0,0,0.25);transition:transform 0.2s,box-shadow 0.2s;";
    fab.addEventListener("mouseenter", function () {
      fab.style.transform = "scale(1.1)";
      fab.style.boxShadow = "0 6px 24px rgba(0,0,0,0.35)";
    });
    fab.addEventListener("mouseleave", function () {
      fab.style.transform = "scale(1)";
      fab.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)";
    });

    // ── Panel ───────────────────────────────────────────────────────
    var panel = document.createElement("div");
    panel.id = "notepad-panel";
    panel.style.cssText =
      "position:fixed;bottom:2rem;right:2rem;width:420px;max-height:520px;" +
      "border-radius:12px;z-index:9999;display:none;flex-direction:column;" +
      "background:var(--md-default-bg-color, #fff);" +
      "border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);" +
      "box-shadow:0 8px 32px rgba(0,0,0,0.25);overflow:hidden;";

    // Header
    var header = document.createElement("div");
    header.style.cssText =
      "background:var(--md-primary-fg-color, #009688);color:#fff;" +
      "padding:0.8rem 1rem;display:flex;flex-direction:column;gap:0.5rem;" +
      "flex-shrink:0;";

    // Top row: title + close
    var headerTop = document.createElement("div");
    headerTop.style.cssText = "display:flex;align-items:center;justify-content:space-between;";

    var headerTitle = document.createElement("div");
    headerTitle.style.cssText = "font-weight:700;font-size:1rem;";
    headerTitle.textContent = "Lab Notes";

    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    closeBtn.style.cssText =
      "background:none;border:none;color:#fff;font-size:1.4rem;cursor:pointer;" +
      "padding:0 0.2rem;opacity:0.8;line-height:1;";
    closeBtn.addEventListener("click", function () { togglePanel(false); });

    headerTop.appendChild(headerTitle);
    headerTop.appendChild(closeBtn);

    // Bottom row: page label + tabs
    var headerBottom = document.createElement("div");
    headerBottom.style.cssText = "display:flex;align-items:center;justify-content:space-between;";

    var headerSub = document.createElement("div");
    headerSub.id = "notepad-page-label";
    headerSub.style.cssText = "font-size:0.78rem;opacity:0.8;";

    var tabBar = document.createElement("div");
    tabBar.style.cssText = "display:flex;gap:0.4rem;";

    var tabPage = document.createElement("button");
    tabPage.textContent = "This page";
    tabPage.id = "notepad-tab-page";
    tabPage.style.cssText =
      "padding:0.25rem 0.6rem;border-radius:4px;border:1px solid rgba(255,255,255,0.4);" +
      "background:rgba(255,255,255,0.2);color:#fff;font-size:0.75rem;cursor:pointer;font-weight:600;";

    var tabAll = document.createElement("button");
    tabAll.textContent = "All notes";
    tabAll.id = "notepad-tab-all";
    tabAll.style.cssText =
      "padding:0.25rem 0.6rem;border-radius:4px;border:1px solid rgba(255,255,255,0.2);" +
      "background:transparent;color:rgba(255,255,255,0.7);font-size:0.75rem;cursor:pointer;font-weight:600;";

    tabBar.appendChild(tabPage);
    tabBar.appendChild(tabAll);

    headerBottom.appendChild(headerSub);
    headerBottom.appendChild(tabBar);

    header.appendChild(headerTop);
    header.appendChild(headerBottom);

    // Body - page notes view
    var bodyPage = document.createElement("div");
    bodyPage.id = "notepad-body-page";
    bodyPage.style.cssText = "flex:1;display:flex;flex-direction:column;padding:0.8rem;overflow:hidden;";

    var textarea = document.createElement("textarea");
    textarea.id = "notepad-textarea";
    textarea.placeholder = "Type your notes for this page...";
    textarea.style.cssText =
      "flex:1;border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);" +
      "border-radius:8px;padding:0.7rem;font-size:0.85rem;resize:none;" +
      "font-family:inherit;line-height:1.5;min-height:200px;" +
      "background:var(--md-code-bg-color, #f5f5f5);" +
      "color:var(--md-default-fg-color, #333);outline:none;";
    textarea.addEventListener("input", function () {
      var notes = loadNotes();
      var key = getPageKey();
      if (textarea.value.trim()) {
        notes[key] = { text: textarea.value, title: getPageTitle(), updated: Date.now() };
      } else {
        delete notes[key];
      }
      saveNotes(notes);
    });

    bodyPage.appendChild(textarea);

    // Body - all notes view
    var bodyAll = document.createElement("div");
    bodyAll.id = "notepad-body-all";
    bodyAll.style.cssText =
      "flex:1;display:none;flex-direction:column;padding:0.8rem;" +
      "overflow-y:auto;max-height:380px;";

    // Footer
    var footer = document.createElement("div");
    footer.style.cssText =
      "padding:0.5rem 0.8rem;border-top:1px solid var(--md-default-fg-color--lightest, #e0e0e0);" +
      "display:flex;justify-content:space-between;align-items:center;flex-shrink:0;";

    var noteCount = document.createElement("span");
    noteCount.id = "notepad-count";
    noteCount.style.cssText = "font-size:0.75rem;color:var(--md-default-fg-color--light);";

    var clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear this page";
    clearBtn.id = "notepad-clear";
    clearBtn.style.cssText =
      "font-size:0.75rem;color:var(--md-default-fg-color--light);background:none;" +
      "border:none;cursor:pointer;text-decoration:underline;";
    clearBtn.addEventListener("click", function () {
      textarea.value = "";
      var notes = loadNotes();
      delete notes[getPageKey()];
      saveNotes(notes);
      updateCount();
    });

    footer.appendChild(noteCount);
    footer.appendChild(clearBtn);

    panel.appendChild(header);
    panel.appendChild(bodyPage);
    panel.appendChild(bodyAll);
    panel.appendChild(footer);

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    // ── Tab switching ───────────────────────────────────────────────

    var activeTab = "page";

    tabPage.addEventListener("click", function () {
      activeTab = "page";
      tabPage.style.background = "rgba(255,255,255,0.2)";
      tabPage.style.borderColor = "rgba(255,255,255,0.4)";
      tabPage.style.color = "#fff";
      tabAll.style.background = "transparent";
      tabAll.style.borderColor = "rgba(255,255,255,0.2)";
      tabAll.style.color = "rgba(255,255,255,0.7)";
      bodyPage.style.display = "flex";
      bodyAll.style.display = "none";
      clearBtn.style.display = "";
    });

    tabAll.addEventListener("click", function () {
      activeTab = "all";
      tabAll.style.background = "rgba(255,255,255,0.2)";
      tabAll.style.borderColor = "rgba(255,255,255,0.4)";
      tabAll.style.color = "#fff";
      tabPage.style.background = "transparent";
      tabPage.style.borderColor = "rgba(255,255,255,0.2)";
      tabPage.style.color = "rgba(255,255,255,0.7)";
      bodyPage.style.display = "none";
      bodyAll.style.display = "flex";
      clearBtn.style.display = "none";
      renderAllNotes();
    });

    // ── Toggle panel ────────────────────────────────────────────────

    function togglePanel(show) {
      isOpen = typeof show === "boolean" ? show : !isOpen;
      if (isOpen) {
        fab.style.display = "none";
        panel.style.display = "flex";
        loadPageNote();
        updateCount();
        headerSub.textContent = truncate(getPageTitle(), 40);
      } else {
        panel.style.display = "none";
        fab.style.display = "flex";
      }
    }

    fab.addEventListener("click", function () { togglePanel(true); });

    // ── Disclaimer tooltip next to FAB ──────────────────────────────
    var tip = document.createElement("div");
    tip.id = "notepad-tip";
    tip.textContent = "Notes are saved in this browser only. They will be lost if you clear browser data or switch devices.";
    tip.style.cssText =
      "position:fixed;bottom:5.5rem;right:2rem;width:200px;padding:0.6rem 0.8rem;" +
      "background:var(--md-default-bg-color, #fff);color:var(--md-default-fg-color--light);" +
      "font-size:0.7rem;line-height:1.4;border-radius:8px;" +
      "border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);" +
      "box-shadow:0 4px 12px rgba(0,0,0,0.15);display:none;z-index:9997;";
    document.body.appendChild(tip);

    fab.addEventListener("mouseenter", function () { tip.style.display = "block"; });
    fab.addEventListener("mouseleave", function () { tip.style.display = "none"; });

    // ── Helpers ──────────────────────────────────────────────────────

    function loadPageNote() {
      var notes = loadNotes();
      var entry = notes[getPageKey()];
      textarea.value = entry ? entry.text : "";
    }

    function updateCount() {
      var notes = loadNotes();
      var count = Object.keys(notes).length;
      noteCount.textContent = count + " page" + (count !== 1 ? "s" : "") + " with notes";
    }

    function truncate(str, len) {
      return str.length > len ? str.substring(0, len) + "..." : str;
    }

    function renderAllNotes() {
      var notes = loadNotes();
      bodyAll.innerHTML = "";

      var keys = Object.keys(notes).sort(function (a, b) {
        return (notes[b].updated || 0) - (notes[a].updated || 0);
      });

      if (!keys.length) {
        var empty = document.createElement("div");
        empty.style.cssText =
          "text-align:center;color:var(--md-default-fg-color--light);" +
          "font-size:0.85rem;padding:2rem 0;";
        empty.textContent = "No notes yet. Start typing on any page.";
        bodyAll.appendChild(empty);
        return;
      }

      keys.forEach(function (key) {
        var entry = notes[key];
        var card = document.createElement("div");
        card.style.cssText =
          "background:var(--md-code-bg-color, #f5f5f5);border-radius:8px;" +
          "padding:0.7rem 0.8rem;margin-bottom:0.5rem;" +
          "border:1px solid var(--md-default-fg-color--lightest, #e0e0e0);";

        var title = document.createElement("div");
        title.style.cssText = "font-weight:600;font-size:0.82rem;margin-bottom:0.3rem;";
        title.textContent = entry.title || key;

        var text = document.createElement("div");
        text.style.cssText =
          "font-size:0.78rem;color:var(--md-default-fg-color--light);" +
          "white-space:pre-wrap;word-break:break-word;max-height:80px;overflow:hidden;";
        text.textContent = entry.text;

        card.appendChild(title);
        card.appendChild(text);
        bodyAll.appendChild(card);
      });
    }
  }

  // ── Bootstrap ─────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", init);

  var subscribed = false;
  var poll = setInterval(function () {
    if (typeof document$ !== "undefined" && !subscribed) {
      subscribed = true;
      clearInterval(poll);
      document$.subscribe(function () {
        // On page change, reload the note for the new page
        setTimeout(function () {
          var textarea = document.getElementById("notepad-textarea");
          var label = document.getElementById("notepad-page-label");
          if (textarea) {
            var notes = loadNotes();
            var entry = notes[getPageKey()];
            textarea.value = entry ? entry.text : "";
          }
          if (label) {
            var h1 = document.querySelector("article h1");
            label.textContent = h1 ? h1.textContent.trim().substring(0, 40) : "";
          }
          // Re-init if fab was removed by navigation
          if (!document.getElementById("notepad-fab") && !document.getElementById("notepad-panel")) {
            init();
          }
        }, 100);
      });
    }
  }, 100);
})();
