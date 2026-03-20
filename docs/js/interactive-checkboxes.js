/**
 * Interactive lab progress tracker.
 *
 * - On submodule pages: shows a "Mark Task Complete" / "Completed" button.
 * - On the Project Task Board: checkboxes auto-sync with completed tasks,
 *   progress bar shows overall completion, and manual toggling also works.
 * - On module overview pages: shows mini progress for that module.
 *
 * All state is stored in localStorage under a single key using task IDs
 * like "1a", "2b", "5f", etc.
 */
(function () {
  var STORAGE_KEY = "lab-completed-tasks";

  // ── Task ID registry ──────────────────────────────────────────────────
  // Maps URL fragments to task IDs used across all pages.
  var URL_TO_TASK = {
    "module-1a": "1a", "module-1b": "1b", "module-1c": "1c",
    "module-1d": "1d", "module-1e": "1e", "module-1f": "1f",
    "module-1g": "1g",
    "module-2a": "2a", "module-2b": "2b", "module-2c": "2c",
    "module-2d": "2d",
    "module-3a": "3a", "module-3b": "3b", "module-3c": "3c",
    "module-3d": "3d",
    "module-4a": "4a", "module-4b": "4b", "module-4c": "4c",
    "module-4d": "4d", "module-4e": "4e",
    "module-5a": "5a", "module-5b": "5b", "module-5c": "5c",
    "module-5d": "5d", "module-5e": "5e", "module-5f": "5f",
    "module-6a": "6a", "module-6b": "6b",
    "module-7a": "7a", "module-7b": "7b", "module-7c": "7c",
    "module-7d": "7d", "module-7e": "7e",
    "module-8a": "8a", "module-8b": "8b",
    "module-9a": "9a"
  };

  // Also match "About this Lab" and "Accessing your Lab"
  var SPECIAL_PAGES = {
    "about-this-lab": "about",
    "accessing-your-lab": "access"
  };

  // ── State helpers ─────────────────────────────────────────────────────

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function isCompleted(taskId) {
    return !!loadState()[taskId];
  }

  function setCompleted(taskId, done) {
    var state = loadState();
    if (done) { state[taskId] = true; } else { delete state[taskId]; }
    saveState(state);
  }

  // ── Detect current page ───────────────────────────────────────────────

  function getCurrentTaskId() {
    var path = window.location.pathname;
    // Check submodule pages
    for (var frag in URL_TO_TASK) {
      if (path.indexOf(frag) !== -1 && path.indexOf(frag + "/") === -1) {
        // make sure it's the page, not a parent folder
        return URL_TO_TASK[frag];
      }
    }
    for (var sp in SPECIAL_PAGES) {
      if (path.indexOf(sp) !== -1) return SPECIAL_PAGES[sp];
    }
    return null;
  }

  function isTaskBoardPage() {
    return window.location.pathname.indexOf("project-task-board") !== -1;
  }

  function isModuleOverviewPage() {
    var path = window.location.pathname;
    // Module overview pages end with module-N-.../  (the index.md)
    return /module-\d.*\/$/.test(path) || /module-\d.*\/index/.test(path);
  }

  // ── Extract task ID from checkbox label text ──────────────────────────
  // Task board checkboxes have text like "1a: Activating..." or
  // "About this Lab — review..."

  function taskIdFromLabel(text) {
    text = text.trim();
    // Match "1a:", "2b:", "8b:" etc.
    var m = text.match(/^(\d+[a-z]):/);
    if (m) return m[1];
    // Special pages
    if (text.toLowerCase().indexOf("about this lab") === 0) return "about";
    if (text.toLowerCase().indexOf("accessing your lab") === 0) return "access";
    return null;
  }

  // ── Render "Mark Task Complete" button on submodule pages ─────────────

  function renderCompleteButton() {
    var taskId = getCurrentTaskId();
    if (!taskId) return;

    // Don't duplicate
    if (document.getElementById("task-complete-btn")) return;

    var article = document.querySelector("article.md-content__inner");
    if (!article) return;

    var completed = isCompleted(taskId);

    // Container
    var container = document.createElement("div");
    container.id = "task-complete-btn";
    container.style.cssText =
      "margin:2rem 0;padding:1rem 1.2rem;border-radius:8px;display:flex;" +
      "align-items:center;justify-content:space-between;gap:1rem;" +
      "border:2px solid " + (completed ? "#4caf50" : "var(--md-primary-fg-color, #009688)") + ";" +
      "background:" + (completed ? "rgba(76,175,80,0.08)" : "rgba(0,150,136,0.04)") + ";";

    // Label
    var label = document.createElement("span");
    label.id = "task-complete-label";
    label.style.cssText = "font-weight:600;font-size:0.95rem;";
    label.textContent = completed
      ? "You have completed this task"
      : "Finished this task?";

    // Button
    var btn = document.createElement("button");
    btn.id = "task-complete-action";
    btn.style.cssText =
      "padding:0.5rem 1.2rem;border-radius:6px;border:none;cursor:pointer;" +
      "font-weight:600;font-size:0.9rem;transition:all 0.2s;" +
      "color:#fff;background:" + (completed ? "#4caf50" : "var(--md-primary-fg-color, #009688)") + ";";
    btn.textContent = completed ? "Completed" : "Mark Task Complete";

    btn.addEventListener("click", function () {
      var nowDone = !isCompleted(taskId);
      setCompleted(taskId, nowDone);
      updateButtonState(container, label, btn, nowDone);
      if (nowDone) showCelebration();
    });

    container.appendChild(label);
    container.appendChild(btn);

    // Insert at end of article content
    article.appendChild(container);
  }

  function updateButtonState(container, label, btn, completed) {
    container.style.borderColor = completed ? "#4caf50" : "var(--md-primary-fg-color, #009688)";
    container.style.background = completed ? "rgba(76,175,80,0.08)" : "rgba(0,150,136,0.04)";
    label.textContent = completed ? "You have completed this task" : "Finished this task?";
    btn.textContent = completed ? "Completed" : "Mark Task Complete";
    btn.style.background = completed ? "#4caf50" : "var(--md-primary-fg-color, #009688)";
  }

  // ── Celebration overlay ────────────────────────────────────────────────

  function showCelebration() {
    // Overlay
    var overlay = document.createElement("div");
    overlay.id = "celebration-overlay";
    overlay.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;" +
      "display:flex;flex-direction:column;align-items:center;justify-content:center;" +
      "background:rgba(0,0,0,0.82);opacity:0;transition:opacity 0.4s;cursor:pointer;";

    // Cisco ASCII art
    var ascii = document.createElement("pre");
    ascii.style.cssText =
      "color:#049fd9;font-size:0.9rem;line-height:1.2;font-family:'Courier New',monospace;" +
      "text-align:center;margin:0;letter-spacing:0.05em;text-shadow:0 0 12px rgba(4,159,217,0.5);" +
      "transform:scale(0.8);transition:transform 0.5s;";
    ascii.textContent =
      "  ######  ##  ######   ######   #######  \n" +
      " ##       ##  ##    # ##    ## ##     ## \n" +
      " ##       ##  ##      ##       ##     ## \n" +
      " ##       ##   #####  ##       ##     ## \n" +
      " ##       ##       ## ##       ##     ## \n" +
      " ##       ##  #    ## ##    ## ##     ## \n" +
      "  ######  ##  ######   ######   #######  ";

    // Message
    var msg = document.createElement("div");
    msg.style.cssText =
      "color:#fff;font-size:1.4rem;font-weight:700;margin-top:1.5rem;" +
      "text-align:center;text-shadow:0 0 20px rgba(4,159,217,0.4);";
    msg.textContent = "Task Complete!";

    var sub = document.createElement("div");
    sub.style.cssText =
      "color:rgba(255,255,255,0.6);font-size:0.9rem;margin-top:0.5rem;text-align:center;";
    sub.textContent = "Great work! Keep going.";

    var dismiss = document.createElement("div");
    dismiss.style.cssText =
      "color:rgba(255,255,255,0.35);font-size:0.75rem;margin-top:1.5rem;text-align:center;";
    dismiss.textContent = "Click anywhere to dismiss";

    overlay.appendChild(ascii);
    overlay.appendChild(msg);
    overlay.appendChild(sub);
    overlay.appendChild(dismiss);
    document.body.appendChild(overlay);

    // Confetti particles
    var colors = ["#049fd9", "#4caf50", "#ffb300", "#e65100", "#7b1fa2", "#00bcd4", "#fff"];
    for (var i = 0; i < 60; i++) {
      (function (idx) {
        var p = document.createElement("div");
        var size = Math.random() * 8 + 4;
        var left = Math.random() * 100;
        var delay = Math.random() * 0.6;
        var dur = Math.random() * 1.5 + 1.5;
        var color = colors[Math.floor(Math.random() * colors.length)];
        var shape = Math.random() > 0.5 ? "50%" : "0";
        p.style.cssText =
          "position:fixed;top:-10px;left:" + left + "%;" +
          "width:" + size + "px;height:" + size + "px;" +
          "background:" + color + ";border-radius:" + shape + ";" +
          "z-index:100000;pointer-events:none;opacity:0.9;" +
          "animation:confetti-fall " + dur + "s ease-in " + delay + "s forwards;";
        document.body.appendChild(p);
        setTimeout(function () {
          if (p.parentNode) p.parentNode.removeChild(p);
        }, (dur + delay) * 1000 + 200);
      })(i);
    }

    // Inject confetti keyframes if not already present
    if (!document.getElementById("confetti-style")) {
      var style = document.createElement("style");
      style.id = "confetti-style";
      style.textContent =
        "@keyframes confetti-fall {" +
        "  0% { transform: translateY(0) rotate(0deg); opacity: 1; }" +
        "  100% { transform: translateY(100vh) rotate(" + (Math.random() > 0.5 ? "" : "-") + "720deg); opacity: 0; }" +
        "}";
      document.head.appendChild(style);
    }

    // Animate in
    requestAnimationFrame(function () {
      overlay.style.opacity = "1";
      ascii.style.transform = "scale(1)";
    });

    // Dismiss on click or auto after 3.5s
    function dismiss_fn() {
      overlay.style.opacity = "0";
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 400);
    }
    overlay.addEventListener("click", dismiss_fn);
    setTimeout(dismiss_fn, 3500);
  }

  // ── Task Board: sync checkboxes with completed state ──────────────────

  function syncTaskBoard() {
    if (!isTaskBoardPage()) return;

    var checkboxes = document.querySelectorAll(
      ".task-list-item input[type='checkbox']"
    );
    if (!checkboxes.length) return;

    for (var i = 0; i < checkboxes.length; i++) {
      (function (cb) {
        var li = cb.closest("li");
        if (!li) return;

        var taskId = taskIdFromLabel(li.textContent);

        // Make clickable
        cb.removeAttribute("disabled");
        cb.style.cursor = "pointer";
        cb.style.pointerEvents = "auto";

        // Sync from storage
        if (taskId && isCompleted(taskId)) {
          cb.checked = true;
        }

        // Apply visual style
        applyCheckboxStyle(cb, li);

        // Clone to remove old listeners
        var newCb = cb.cloneNode(true);
        cb.parentNode.replaceChild(newCb, cb);

        newCb.addEventListener("change", function () {
          if (taskId) {
            setCompleted(taskId, newCb.checked);
          }
          applyCheckboxStyle(newCb, li);
          renderProgressBar();
        });
      })(checkboxes[i]);
    }

    renderProgressBar();
  }

  function applyCheckboxStyle(cb, li) {
    if (cb.checked) {
      li.style.opacity = "0.55";
      li.style.textDecoration = "line-through";
    } else {
      li.style.opacity = "1";
      li.style.textDecoration = "none";
    }
  }

  // ── Module overview pages: show mini progress ─────────────────────────

  function syncModuleOverview() {
    if (!isModuleOverviewPage()) return;

    var checkboxes = document.querySelectorAll(
      ".task-list-item input[type='checkbox']"
    );
    if (!checkboxes.length) return;

    for (var i = 0; i < checkboxes.length; i++) {
      (function (cb) {
        var li = cb.closest("li");
        if (!li) return;
        var taskId = taskIdFromLabel(li.textContent);

        cb.removeAttribute("disabled");
        cb.style.cursor = "pointer";
        cb.style.pointerEvents = "auto";

        if (taskId && isCompleted(taskId)) {
          cb.checked = true;
        }
        applyCheckboxStyle(cb, li);

        var newCb = cb.cloneNode(true);
        cb.parentNode.replaceChild(newCb, cb);

        newCb.addEventListener("change", function () {
          if (taskId) {
            setCompleted(taskId, newCb.checked);
          }
          applyCheckboxStyle(newCb, li);
          renderProgressBar();
        });
      })(checkboxes[i]);
    }

    renderProgressBar();
  }

  // ── Progress bar (shown on task board and module overviews) ───────────

  function renderProgressBar() {
    var allCb = document.querySelectorAll(
      ".task-list-item input[type='checkbox']"
    );
    if (!allCb.length) return;

    var total = allCb.length;
    var checked = 0;
    for (var i = 0; i < allCb.length; i++) {
      if (allCb[i].checked) checked++;
    }
    var pct = Math.round((checked / total) * 100);

    var bar = document.getElementById("lab-progress-bar");
    if (!bar) {
      var article = document.querySelector("article.md-content__inner");
      if (!article) return;

      bar = document.createElement("div");
      bar.id = "lab-progress-bar";
      bar.style.cssText = "margin:0.5rem 0 1.5rem 0;";

      var lbl = document.createElement("div");
      lbl.id = "lab-progress-label";
      lbl.style.cssText =
        "font-size:0.85rem;margin-bottom:0.4rem;font-weight:600;" +
        "color:var(--md-default-fg-color--light);";

      var track = document.createElement("div");
      track.style.cssText =
        "background:var(--md-default-fg-color--lightest, #e0e0e0);" +
        "border-radius:6px;height:10px;overflow:hidden;";

      var fill = document.createElement("div");
      fill.id = "lab-progress-fill";
      fill.style.cssText =
        "height:100%;border-radius:6px;transition:width 0.4s ease;" +
        "background:var(--md-primary-fg-color, #009688);width:0%;";

      track.appendChild(fill);
      bar.appendChild(lbl);
      bar.appendChild(track);

      var h1 = article.querySelector("h1");
      if (h1 && h1.nextElementSibling) {
        article.insertBefore(bar, h1.nextElementSibling);
      } else {
        article.appendChild(bar);
      }
    }

    document.getElementById("lab-progress-fill").style.width = pct + "%";
    document.getElementById("lab-progress-label").textContent =
      checked + " / " + total + " tasks complete (" + pct + "%)";
  }

  // ── Main init ─────────────────────────────────────────────────────────

  function init() {
    if (isTaskBoardPage()) {
      syncTaskBoard();
    } else if (isModuleOverviewPage()) {
      syncModuleOverview();
    }
    // Always try to render the complete button on submodule pages
    renderCompleteButton();
  }

  // ── Bootstrap ─────────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", init);

  // Material instant navigation
  var subscribed = false;
  var poll = setInterval(function () {
    if (typeof document$ !== "undefined" && !subscribed) {
      subscribed = true;
      clearInterval(poll);
      document$.subscribe(function () {
        setTimeout(init, 50);
      });
    }
  }, 100);

  window.addEventListener("popstate", function () {
    setTimeout(init, 100);
  });
})();
