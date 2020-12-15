import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp(functions.config().firebase)

export const getSessionId = functions.https.onCall(async (data, context) => {

    const stripe = require('stripe')('sk_test_51Ht0EFErANrRMY7o412dl7fZolzWryh91hEYQ8Udfdc7NtWRizbFLNX8929rcoVmSdstyfZmynXfseVeP41JqGhG00FFQeybQg');

    const session = await stripe.checkout.sessions.create({
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
    payment_method_types: ['card'],
    line_items: [
        {price: data.price, quantity: 1},
    ],
    mode: 'subscription',
});
    
    return session.id;
});

