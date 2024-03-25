class ForeCastCard extends HTMLElement {
  static observedAttributes = ["high", "low", "current", "condition", "city"];

  city = "";

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <div>
        <span id="city">Loading</span>
        <span id="low">Loading</span>
        <span id="high">Loading</span>
        <span id="current">Loading</span>
        <span id="condition">Loading</span>
    </div>`;
  }

  //   connectedCallback() {
  //     console.log("high", this.getAttribute("high"));
  //     console.log("low", this.getAttribute("low"));
  //     console.log("city", this.getAttribute("city"));
  //     console.log("current", this.getAttribute("current"));
  //     console.log("conditon", this.getAttribute("condition"));
  //   }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has chnaged from ${oldValue} to ${newValue}`
    );

    this.setTargetValue(name, newValue);
  }

  setTargetValue(targetId, value) {
    const target = this.shadowRoot.getElementById(targetId);

    if (!target) {
      return;
    }

    switch (targetId) {
      case "high":
      case "low":
      case "current":
        if (isNaN(value)) {
          target.innerText = "N/A";
        } else {
          target.innerText = `${value}°`;
        }
        break;
      default:
        target.innerText = value;
    }
  }
}

customElements.define("forecast-card", ForeCastCard);
