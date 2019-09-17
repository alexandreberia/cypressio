describe('Planet API Testing with Cypress', () => {
    var result

    it('Validate the status', () => {
        result = cy.request('/planets/1')
        
        result.its('status')
              .should('equal',200);
     })

    it('Validate the header of People', () => {
        result = cy.request('/planets/1')
        
        result.its('headers')
              .its('content-type')
              .should('include', 'application/json')
     })

    it('Validate the body of Planet ', () => {
        result = cy.request('/planets/1')
       
        result
            .its('body')
            .then(json => {
                expect(json).to.have.property('name')
                expect(json).to.have.property('rotation_period')
                expect(json).to.have.property('orbital_period')
                expect(json).to.have.property('diameter')
                expect(json).to.have.property('climate')
                expect(json).to.have.property('gravity')
                expect(json).to.have.property('terrain')
                expect(json).to.have.property('surface_water')
                expect(json).to.have.property('population')
            })
     })  

     it('Validate the field type of Planet ', () => {
        result = cy.request('/planets/1')
       
        result
            .its('body')
            .then(json => {
                expect(json.name).to.be.a('string')
                expect(json.rotation_period).to.be.a('numeric')
                expect(json.orbital_period).to.be.a('numeric')
                expect(json.diameter).to.be.a('numeric')
                expect(json.climate).to.be.a('string')
                expect(json.gravity).to.be.a('string')
                expect(json.terrain).to.be.a('string')
                expect(json.surface_water).to.be.a('boolean')
                expect(json.population).to.be.a('numeric')
                
            })
     }) 
}) 