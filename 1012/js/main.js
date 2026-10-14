const NAVBAR_COLLAPSE_ID = "main-navbar-collapse";
const BRAND = { text: "Navbar", href: "#" };
const NAV_ITEMS = [
  { type: "link", text: "Home", href: "#", active: true },
  { type: "link", text: "Link", href: "#" },
  {
    type: "dropdown",
    text: "Dropdown",
    items: [
      { text: "Action", href: "#" },
      { text: "Another action", href: "#" },
      { divider: true },
      { text: "Somethinf else here", href: "#" },
    ],
  },
  { type: "link", text: "Disabled", disabled: true },
];
const SEARCH = { palaceholder: "Search", buttonText: "Search" };
/**
 * Valami angol szoveg
 * @param {string} tag
 * @param {{className?: string, text?: string, attrs?: Record<string, string>}} [options]
 * @param  {...Node} children
 * @returns {HTMLElement}
 */
function el(tag, { className = "", text, attrs = {} } = {}, ...children) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  Object.entries(attrs).forEach(([key, value]) =>
    attrs.setAttribute(key, value)
  );
  node.append(...children);
  return node;
}

function className(...names) {
  return names.filter(Boolean).join(" ");
}

function createBrand({ text, href }) {
  return el("a", { className: "navbar-brand", text: text, attrs: { href } });
}
function createToggler(targetId) {
  return el(
    "button",
    {
      className: "navbar-toggler",
      attrs: {
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": `#${targetId}`,
        "aria-controls": targetId,
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
      },
    },
    el("span", { className: "navbar-toggler-icon" })
  );
}
function createNavLink({ text, href = "#", active = false, disabled = false }) {
  const attrs = {};
  if (disabled) {
    attrs["aria-disabled"] = "true";
  } else {
    attrs.href = href;
  }
  if (active) attrs["aria-current"] = "page";
  const link = el("a", {
    className: className(
      "nav-link",
      active && "active",
      disabled && "disabled"
    ),
    text,
    attrs,
  });
  return el("li", { className: "nav-item" }, link);
}
function createDropdownEntry(entry) {
  const content = entry.divider
    ? el("hr", { className: "dropdown-divider" })
    : el("a", {
      className: "dropdown-item",
      text: entry.text,
      attrs: { href: entry.href },
    });
  return el("li", {}, content);
}
function createNavDropdown({ text, items }) {
  const toggle = el("a", {
    className: "nav-link dropdown-toggle",
    text,
    attrs: {
      href: "#",
      role: "button",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false",
    },
  });
  const menu = el(
    "ul",
    { className: "dropdown-menu" },
    ...items.map(createDropdownEntry)
  );
  return el("li", { className: "nav-item dropdown" }, toggle, menu);
}
const NAV_ITEM_FACTORIES = {
  link: createNavLink,
  dropdown: createNavDropdown,
};
function createNavItem(item) {
  const factory = NAV_ITEM_FACTORIES[item.type];
  if (!factory) throw new Error(`Ismeretlen meüpont típus: ${item.type}`);
  return factory(item);
}
