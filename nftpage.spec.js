context('frontpage', () => {
    beforeEach(() => {
        cy.visit("https://crypto.com/nft");
        cy.request("https://crypto.com/nft").then((response) => {
            expect(response.status).to.eq(200);
        })
        cy.wait(1000);
    })

    describe("front page", function () {
        it("the view drop button test function", () => {
            cy.get('button').should("have.class", "css-1fshdqz").contains("View Drop").click()
        })

        it("Test the email subscribe function", () => {
            const myEmail = 'chantszto.chris@gmail.com';
            cy.wait(10000); 
            // give time for the broswer to load the input box
            cy.get('input[name="email"]').type(myEmail);
            cy.get('svg[class="SubscribeForm_checkbox__z4ChK"]').click();
            cy.get('button').contains("Subscribe").click();
            cy.wait(1000);
            cy.get('div[class="geetest_radar_tip"]')
            .within(($div) => {
                cy.get('span[class="geetest_radar_tip_content"]').contains("Click to verify").click();
            })
        })

        it("Test the response status of Marketplace and drop", () => {
            const url = ["/marketplace", "/drops"];
            cy.wrap(url).each((index) => {
                cy.request("https://crypto.com/nft"+index).then((response) => {
                    expect(response.status).to.eq(200);
            })
            })
        })
    })
})

context('drop page', () => {
    beforeEach(() => {
        cy.visit("https://crypto.com/nft")
        cy.get('a[href="/nft/drops"]').click()
        cy.wait(5000);
    })

    describe("drops page", function () {
        it("drop page create page", () => {
            cy.get('div').should('have.class', 'css-ymhugb is-selected')
            .within(($div) => {
                cy.get('div[class="css-18qxptm"]').first().click();
            })
            cy.wait(10000);
        })
    })
})


context('the market', () => {
    beforeEach(() => {
        cy.visit("https://crypto.com/nft")
        cy.get('a[href="/nft/marketplace"]').click()
        cy.wait(5000);
    })

    describe("Marketplace", function () {

        it("Test the share function", () => {
            const share = ["Facebook", "Twitter", "Telegram", "Whatsapp"]; // email is to open an external email app which cannot be opened through cypress.io
            cy.get('div').should('have.class', 'css-1hqh1m1').contains('FLOOR PRICE').click()
            cy.wait(8000);
            cy.wrap(share).each((index) => {
                cy.get('div').should('have.class', 'css-std42m').contains("Share").click()
                cy.get('div').should('have.class', 'css-eryx0e').contains(index).click()
            })
            cy.go('back');
        })

        it("Test the filter function", () => {
            const kindOfArt = ["Art", "Celebrities", "Gaming", "Sport", "Music", "Crypto", "All"];
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })
            cy.wrap(kindOfArt).each((index) => {
                cy.get('button').contains(index).click()
                cy.wait(1000);
            })
        })

        it("Test the curated function", () => {
            const word = ["Curated", "All"]
            cy.wrap(word).each((index) => {
                cy.get('button').contains(index).click()
                cy.wait(1000);
            })
        })

        it("Test the filter value function", () => {
            const minPrice = 50;
            const maxPrice = 100;
            cy.get('button').contains("Filter").click()
            cy.get('input[name="minPrice"]').type(minPrice);
            cy.get('input[name="maxPrice"]').type(maxPrice);
            cy.wait(6000);
            cy.get('button[type="submit"]').contains("Apply").click();
            cy.wait(6000);
            cy.get('div').should('have.class', 'css-1hqh1m1').contains('FLOOR PRICE').click()
            cy.wait(1000);
            cy.get('div[class="css-14xuj6k"]')
            .within(($div) => {
                cy.get('div[class="css-e596xv"]').invoke('text').then(parseFloat).should('be.gte', minPrice).and('be.lte', maxPrice);
            })
        })
    })
})