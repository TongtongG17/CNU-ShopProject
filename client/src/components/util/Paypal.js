import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
           
            console.log("The payment was succeeded!", payment);

            this.props.onSuccess(payment)
            
        }

        const onCancel = (data) => {
            
            console.log('The payment was cancelled!', data);
            
        }

        const onError = (err) => {
         
            console.log("Error!", err);

        }

        let env = 'sandbox'; 
        let currency = 'USD'; 
        let total = this.props.total; 


        const client = {
            sandbox: 'AWQ6mEJxJ8cFah5I2OSjfHOtUh9UmiXB2VdS3Ql6vm3iOFb014H4Ca-Qe9qLtg4Fn5A7Pka0pVS-SXJ2',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                style={{
                    size: 'large',
                    color: 'blue',
                    shape: 'rect',
                    label: 'checkout'
                }}
            />
        );
    }
}