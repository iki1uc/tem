<script>
(function () {

    const ua = navigator.userAgent || navigator.vendor || window.opera;

    // PX – Mobile/Tablet
    const isAppleMobile = /iPhone|iPad|iPod/i.test(ua);
    const isAndroidMobile = /Android/i.test(ua) && /Mobile/i.test(ua);
    const isTablet = /iPad|Tablet|Tab/i.test(ua);

    // PQ/PR – Desktop/Laptop
    const isDesktop = !isAppleMobile && !isAndroidMobile && !isTablet;

    // Routing-Objekt
    const route = {
        PX: { icon: "📱", target: "viPIio" },
        PQ: { icon: "💻", target: "HH" },
        PR: { icon: "🖥️", target: "HH" }
    };

    let device = "";

    // PX → viPIio
    if (isAppleMobile || isAndroidMobile || isTablet) {
        device = "PX";
        window.location.replace("https://iki1uc.github.io/viPIio/");
        return;
    }

    // PQ → Laptop (Desktop + Touch)
    if (isDesktop && navigator.maxTouchPoints > 0) {
        device = "PQ";
    }

    // PR → PC (Desktop ohne Touch)
    if (isDesktop && navigator.maxTouchPoints === 0) {
        device = "PR";
    }

    // HH-Panel aktualisieren
    const hhPanel = document.getElementById("hh-panel");
    if (hhPanel) {
        hhPanel.innerHTML = `
            <h2>HH – Host‑Hub Panel</h2>
            <div><b>Gerät:</b> ${device} ${route[device].icon}</div>
            <div><b>Route:</b> ${route[device].target}</div>
        `;
    }

})();
</script>
