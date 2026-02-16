// Sistema de navegación por pestañas (tabs)
document.querySelectorAll("[data-tabs]").forEach((group) => {
    const buttons = Array.from(group.querySelectorAll(":scope > .tab-buttons .tab-button"));
    const panels = Array.from(group.querySelectorAll(":scope > .tab-panels > .tab-panel"));
    const select = group.querySelector(":scope > .tab-select-wrap .tab-select");

    if (!panels.length || (!buttons.length && !select)) {
        return;
    }

    const activate = (name) => {
        buttons.forEach((btn) => {
            const isActive = btn.dataset.tab === name;
            btn.classList.toggle("is-active", isActive);
            btn.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        panels.forEach((panel) => {
            const isActive = panel.dataset.tabPanel === name;
            panel.classList.toggle("is-active", isActive);
        });

        if (select && select.value !== name) {
            select.value = name;
        }
    };

    let initial = buttons.find((btn) => btn.classList.contains("is-active"));
    if (!initial && buttons.length) {
        initial = buttons[0];
    }

    if (initial) {
        activate(initial.dataset.tab);
    } else if (select) {
        activate(select.value);
    } else if (panels.length) {
        activate(panels[0].dataset.tabPanel);
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => activate(btn.dataset.tab));
    });

    if (select) {
        select.addEventListener("change", (event) => {
            const target = event.target;
            activate(target.value);
        });
    }
});
