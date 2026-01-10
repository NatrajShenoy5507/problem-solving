// let arrayTest= [];
// let text ="desktop-electron, desktop-edge, ipad-portrait, ipad-landscape"
// let test = text.split(",")
// // for(let i=0; i<test.length; i++){
// //     arrayTest.push(test[i]);
// // }
// console.log(test)
const expected = [
    {url:'',         elements: ['h2:contains("Welcome")']},
    {url:'/admin',   elements: ['h2:contains("Admin")', 'button:contains("Find")']},
    {url:'/billing', elements: ['h2:contains("Billing")', 'button:contains("Save")']},
]
class Page{
    verifypage(name){
        cy.get("h2").should('have.text', name)
    }
    visitPage(){
        cy.visit()
    }
}
const testpage  = new Page()
expected.forEach(page=>{


   
})
