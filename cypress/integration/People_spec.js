describe('People API Testing with Cypress', () => {
    var result

    it('Validate the status', () => {
        result = cy.request('/people/1')
        
        result.its('status')
              .should('equal',200);
     })

    it('Validate the header of People', () => {
        result = cy.request('/people/1')
        
        result.its('headers')
              .its('content-type')
              .should('include', 'application/json')
     })

    it('Validate the body of People ', () => {
        result = cy.request('/people/1')
       
        result
            .its('body')
            .then(json => {
                expect(json).to.have.property('name')
                expect(json).to.have.property('height')
                expect(json).to.have.property('mass')
                expect(json).to.have.property('hair_color')
                expect(json).to.have.property('skin_color')
                expect(json).to.have.property('eye_color')
                expect(json).to.have.property('birth_year')
                expect(json).to.have.property('gender')
            })
     })
     
     it('Validate the field type of Planet ', () => {
        result = cy.request('/people/1')
       
        result
            .its('body')
            .then(json => {
                expect(json.name).to.be.a('string')
                expect(json.height).to.be.a('numeric')
                expect(json.mass).to.be.a('numeric')
                expect(json.hair_color).to.be.a('string')
                expect(json.skin_color).to.be.a('string')
                expect(json.eye_color).to.be.a('string')
                expect(json.birth_year).to.be.a('string')
                expect(json.gender).to.be.a('string')
            })
     }) 
}) 