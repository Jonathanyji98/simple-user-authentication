"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSessionId = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
admin.initializeApp(functions.config().firebase);
exports.getSessionId = functions.https.onCall(async (data, context) => {
    const stripe = require('stripe')('sk_test_51Ht0EFErANrRMY7o412dl7fZolzWryh91hEYQ8Udfdc7NtWRizbFLNX8929rcoVmSdstyfZmynXfseVeP41JqGhG00FFQeybQg');
    const session = await stripe.checkout.sessions.create({
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
        payment_method_types: ['card'],
        line_items: [
            { price: data.price, quantity: 1 },
        ],
        mode: 'subscription',
    });
    return session.id;
});
//# sourceMappingURL=index.js.map