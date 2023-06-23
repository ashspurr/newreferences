//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/country-answer', function(request, response) {

    var country = request.session.data['country']
    if (country == "Yes"){
        response.redirect("/complete")
    } else {
        response.redirect("/page2")
    }
})


router.post('/how-long-known', function(request, response) {

    var country = request.session.data['country']
    if (country == "less"){
        response.redirect("/complete")
    } else {
        response.redirect("/page3")
    }
})

// Add your routes here
