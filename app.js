// WIDGET PROJECT - INTERACTION SCRIPT

const ARTICLES = {
  "getting-started": {
    title: "Getting Started with Widget Project",
    badge: "ONBOARDING",
    content: `
      <p>Welcome to <strong>Widget Project</strong>. Here is how to add widgets to your iOS or macOS screens:</p>
      <ul>
        <li><strong>iPhone / iPad:</strong> Long press on any empty area on your Home Screen until the apps jiggle. Tap the <code>+</code> button in the top-left corner, search for <em>Widget Project</em>, and select your preferred widget size (Small, Medium, Large).</li>
        <li><strong>macOS Sequoia & Sonoma:</strong> Right-click on your desktop, select <em>Edit Widgets</em>, find <em>Widget Project</em> in the gallery, and drag your chosen widget directly onto your desktop or Notification Center.</li>
        <li><strong>StandBy Mode:</strong> Connect your iPhone to a charger horizontally. Swipe between views to add or customize your glanceable widgets.</li>
      </ul>
    `
  },
  "weather-widgets": {
    title: "Weather Widgets & Apple WeatherKit",
    badge: "WEATHER",
    content: `
      <p>Widget Project utilizes Apple WeatherKit for hyper-local, real-time forecast data without commercial tracking:</p>
      <ul>
        <li><strong>Location Permissions:</strong> Go to <em>Settings > Privacy & Security > Location Services > Widget Project</em> and select <em>"While Using App or Widgets"</em>.</li>
        <li><strong>Offline Fallback:</strong> If network connectivity is temporarily lost, the widget gracefully retains the last fetched cache with an updated time indicator.</li>
        <li><strong>Custom Locations:</strong> You can long-press the widget, tap <em>Edit Widget</em>, and choose a static city instead of Current Location.</li>
      </ul>
    `
  },
  "music-widgets": {
    title: "Music Widgets & Playback Controls",
    badge: "MEDIA",
    content: `
      <p>Interactive music widgets allow you to see what is currently playing and control playback directly from your screen:</p>
      <ul>
        <li><strong>Apple Music Integration:</strong> Uses native MusicKit frameworks to read playback status and artwork locally.</li>
        <li><strong>Interactive Buttons:</strong> Tap play/pause or next track directly on iOS 17+ and macOS 14+ without opening the application.</li>
      </ul>
    `
  },
  "refresh-issues": {
    title: "Widget Refresh & Update Frequency",
    badge: "TROUBLESHOOTING",
    content: `
      <p>iOS and macOS manage widget update budgets dynamically to maximize battery life:</p>
      <ul>
        <li><strong>System Timelines:</strong> Apple's WidgetKit engine schedules updates based on user interaction frequency and battery state.</li>
        <li><strong>Quick Force-Refresh:</strong> Tapping an interactive widget or opening the host application immediately synchronizes pending data.</li>
        <li><strong>Low Power Mode:</strong> When Low Power Mode is enabled on your device, background widget updates are reduced by the operating system.</li>
      </ul>
    `
  },
  "expenses-budget": {
    title: "Expenses & Budget Tracking",
    badge: "FINANCE",
    content: `
      <p>Track your daily budgets, recurring expenses, and savings targets safely on-device:</p>
      <ul>
        <li><strong>Local Storage:</strong> All financial entries are stored encrypted on your device and inside your personal iCloud container.</li>
        <li><strong>Currency Settings:</strong> Set your local currency symbol and format within the app preferences.</li>
        <li><strong>Interactive Log:</strong> Add quick expenses right from the widget with single-tap shortcuts.</li>
      </ul>
    `
  },
  "purchases-billing": {
    title: "Purchases, In-App Billing & Pro",
    badge: "PURCHASES",
    content: `
      <p>All in-app purchases and subscriptions are handled securely through Apple App Store In-App Purchases:</p>
      <ul>
        <li><strong>Restore Purchases:</strong> Open the app settings and tap <em>Restore Purchases</em> to sync your lifetime unlocks across all your Apple devices.</li>
        <li><strong>Family Sharing:</strong> Supported purchases are automatically shared with members of your Apple Family Sharing group.</li>
        <li><strong>Receipt Inquiries:</strong> View purchase history in <em>Settings > Apple ID > Subscriptions</em>.</li>
      </ul>
    `
  },
  "privacy-security": {
    title: "Privacy, Data Protection & Security",
    badge: "SECURITY",
    content: `
      <p>Our commitment to software minimalism and absolute privacy:</p>
      <ul>
        <li>No user accounts, no login required, and zero analytics telemetry.</li>
        <li>Data stays on your hardware and your private iCloud account.</li>
        <li>We never sell or distribute any usage logs or telemetry to data brokers.</li>
      </ul>
    `
  },
  "troubleshooting": {
    title: "General Troubleshooting & Diagnostic Steps",
    badge: "SUPPORT",
    content: `
      <p>If you experience any unexpected behavior or blank widgets:</p>
      <ul>
        <li><strong>Restart Device:</strong> A quick reboot clears the iOS/macOS WidgetKit cache.</li>
        <li><strong>Remove & Re-add:</strong> Remove the specific widget from your Home Screen or Desktop and re-add it from the widget gallery.</li>
        <li><strong>App Update:</strong> Ensure both your operating system and the Widget Project app are updated to the latest available releases.</li>
      </ul>
    `
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const homeView = document.getElementById("home-view");
  const supportView = document.getElementById("support-view");
  const privacyView = document.getElementById("privacy-view");

  const openSupportBtn = document.getElementById("open-support-btn");
  const openPrivacyBtn = document.getElementById("open-privacy-btn");
  const supportBackBtn = document.getElementById("support-back-btn");
  const privacyBackBtn = document.getElementById("privacy-back-btn");

  const supportCards = document.querySelectorAll(".support-card");
  const articleModal = document.getElementById("article-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBadge = document.getElementById("modal-badge");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  const supportForm = document.getElementById("support-form");
  const formStatus = document.getElementById("form-status");

  // View Navigation
  function switchView(viewName) {
    [homeView, supportView, privacyView].forEach(view => {
      view.classList.remove("active");
      view.setAttribute("aria-hidden", "true");
    });

    let targetView;
    if (viewName === "support") {
      targetView = supportView;
    } else if (viewName === "privacy") {
      targetView = privacyView;
    } else {
      targetView = homeView;
    }

    targetView.classList.add("active");
    targetView.setAttribute("aria-hidden", "false");
    window.location.hash = viewName === "home" ? "" : viewName;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle URL hash on load
  const currentHash = window.location.hash.replace("#", "");
  if (currentHash === "support" || currentHash === "privacy") {
    switchView(currentHash);
  }

  openSupportBtn.addEventListener("click", () => switchView("support"));
  openPrivacyBtn.addEventListener("click", () => switchView("privacy"));
  supportBackBtn.addEventListener("click", () => switchView("home"));
  privacyBackBtn.addEventListener("click", () => switchView("home"));

  // Support Card Click -> Open Modal
  supportCards.forEach(card => {
    const handleCardTrigger = () => {
      const cat = card.getAttribute("data-category");
      const data = ARTICLES[cat];
      if (data) {
        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.content;
        articleModal.classList.add("open");
        articleModal.setAttribute("aria-hidden", "false");
      }
    };

    card.addEventListener("click", handleCardTrigger);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardTrigger();
      }
    });
  });

  // Close Modal
  function closeModal() {
    articleModal.classList.remove("open");
    articleModal.setAttribute("aria-hidden", "true");
  }

  modalCloseBtn.addEventListener("click", closeModal);
  articleModal.addEventListener("click", (e) => {
    if (e.target === articleModal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && articleModal.classList.contains("open")) {
      closeModal();
    }
  });

  // Support Form Submission via FormSubmit (delivers directly to adhinesh73@gmail.com)
  const submitBtn = document.getElementById("submit-btn");

  supportForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("support-email");
    const messageInput = document.getElementById("support-message");

    const email = emailInput.value.trim();
    const msg = messageInput.value.trim();

    if (!email || !msg) {
      formStatus.style.color = "#d93025";
      formStatus.textContent = "Please provide both your email address and message.";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.style.color = "#555555";
    formStatus.textContent = "Sending your query...";

    try {
      const response = await fetch("https://formsubmit.co/ajax/adhinesh73@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Customer Support Query from ${email} - Widget Project`,
          email: email,
          message: msg,
          _replyto: email
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true || result.message)) {
        formStatus.style.color = "#00875a";
        formStatus.textContent = "Message sent successfully! We will review and reply to your email shortly.";
        supportForm.reset();
      } else {
        // Fallback to mailto link if API fails or blocks
        window.location.href = `mailto:adhinesh73@gmail.com?subject=${encodeURIComponent("Customer Support Query - Widget Project")}&body=${encodeURIComponent(msg + "\n\nFrom: " + email)}`;
        formStatus.style.color = "#00875a";
        formStatus.textContent = "Opening your email client to complete sending...";
      }
    } catch (err) {
      // In case of network error, seamlessly provide mailto fallback
      window.location.href = `mailto:adhinesh73@gmail.com?subject=${encodeURIComponent("Customer Support Query - Widget Project")}&body=${encodeURIComponent(msg + "\n\nFrom: " + email)}`;
      formStatus.style.color = "#00875a";
      formStatus.textContent = "Opening your email client to send...";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
      setTimeout(() => {
        formStatus.textContent = "";
      }, 7000);
    }
  });
});
