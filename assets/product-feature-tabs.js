class ProductFeatureTabs extends HTMLElement {
  constructor() {
    super();
    this.selectors = {
      buttons: '[button-tab-cta]',
      feature_tabs: '[tab-features-block]',
    }
    this.init();
  }
  init() {
    this.buttons = this.querySelectorAll(this.selectors.buttons);
    this.features = this.querySelectorAll(this.selectors.feature_tabs);
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.buttons.forEach(prevBtn => {
          if (prevBtn.classList.contains('active')) {
            prevBtn.classList.remove('active');
          }
        });
        if (!btn.classList.contains('active')) {
          btn.classList.add('active');
          this.toggleProducts(btn);
        }
      });
    });
  }
  toggleProducts(button) {
    this.features.forEach(ele => {
      if (ele.classList.contains('active')) {
        ele.classList.remove('active');
      }
    });
    const productsDiv = this.querySelector(`[tab-features-block][data-id="${button.dataset.id}"]`);
    console.log(productsDiv);
    if (productsDiv && !productsDiv.classList.contains('active')) {
      productsDiv.classList.add('active');
    }
  }
}
customElements.define('product-feature-tabs', ProductFeatureTabs);