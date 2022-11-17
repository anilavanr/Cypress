import Header from "../Page/header";
var menu = require("../Data/header");

describe("Check the header of the website", () => {
  const header = new Header();
  beforeEach(() => {
      cy.visit('http://www.flipkart.com');
  });

  it('Check menu links and their landing pages', function () {
      header.getMenu().contains("Top Offers").click();
      cy.url().should('contain', "/products" + menu.header["Top Offers"]);
      header.getMenu().contains("Grocery").click();
      cy.url().should('contain', "/products" + menu.header["Grocery"]);
      header.getMenu().contains("Mobiles").click();
      cy.url().should('contain', "/products" + menu.header["Mobiles"]);
      header.getMenu().contains("Fashion").click();
      cy.url().should('contain', menu.header["Fashion"]);
      header.getMenu().contains("Electronics").click();
      cy.url().should('contain', menu.header["Electronics"]);
      header.getMenu().contains("Home").click();
      cy.url().should('contain', menu.header["Home"]);
      header.getMenu().contains("Appliances").click();
      cy.url().should('contain', menu.header["Appliances"]);
      header.getMenu().contains("Travel").click();
      cy.url().should('contain', menu.header["Travel"]);
      header.getMenu().contains("Beauty,Toys & more").click();
      cy.url().should('contain', menu.header["Beauty,Toys & more"]);
  });
})