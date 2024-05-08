import checkoutNodeJssdk from '@paypal/checkout-server-sdk'

const configureEnvironment = function () {
    const clientIdDev = process.env.NEXT_PUBLIC_CLIENT_ID_DEV
    const clientSecretDev = process.env.NEXT_PAYPAL_CLIENT_SECRET_DEV
    const clientIdProd = process.env.NEXT_PUBLIC_CLIENT_ID_PROD
    const clientSecretProd = process.env.NEXT_PAYPAL_CLIENT_SECRET_PROD
    return process.env.NODE_ENV === 'production'
        ? new checkoutNodeJssdk.core.LiveEnvironment(clientIdProd, clientSecretProd)
        : new checkoutNodeJssdk.core.SandboxEnvironment(clientIdDev, clientSecretDev)
}

const client = function () {
    return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment())
}

export default client
