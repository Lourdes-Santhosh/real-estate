import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-pmie2txcx72g1uc6.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck