import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js'; // this is typescript

declare var require: any
@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.scss']
})
export class PaymentPortalComponent implements OnInit {

  stripePromise = loadStripe('pk_test_51Ht0EFErANrRMY7ozGv1sRxdRdTHOIYaJNaHhDH16F8kQfvKRjxtXAqjiDf6yDiBEY7rztDdg7H0Ffw2tmWHnW1B0011a8EC29');
  amount: number = 1;
  // price: string;
  // firebase = require('firebase-functions');
  constructor() { }

  ngOnInit() {
  }

  async checkout(price: string) {
    // const getSessionId = this.firebase.functions().httpsCallable('getSessionId');
    // getSessionId().then(function(result){
    //   console.log(result);
    // });
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: 'subscription',  
      lineItems: [{ price: price, quantity: this.amount }],
      successUrl: `${window.location.origin}/home`,
      cancelUrl: `${window.location.origin}/home`,
    });
  
    if (error) {
      console.log(error);
    }
  }

  checkoutBasicPrice(){
    console.log("TESTING CLOUD FUNCTION");
    // this.checkout(this.price = 'price_1HtOCwErANrRMY7o0yxjPW13');
    const getSessionId = this.firebase.functions().httpsCallable('getSessionId');
    getSessionId().then(function(result){
      console.log(result);
    });
    console.log("TESTING CLOUD FUNCTION 2");
  }

  // checkoutCommunityPrice(){
  //   this.checkout(this.price = 'price_1HtOCwErANrRMY7ok8YqbS5U');
  // }

  // checkoutPerformancePrice(){
  //   this.checkout(this.price = 'price_1HtOCxErANrRMY7ocgjLrlrj');
  // }

}
