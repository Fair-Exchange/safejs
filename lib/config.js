/*
config.js - Configuration for SafeCoin
*/

module.exports = {
    mainnet: {
        messagePrefix: '\x18Safecoin Signed Message:\n',
        bip32: {
            public: '0488b21f',
            private: '0488ade5'
        },
        pubKeyHash: '3d',
        scriptHash: '56',
        zcPaymentAddressHash: '159a', // Private z-address
        zcSpendingKeyHash: 'ab36', // Spending key
        wif: 'bd'
    },
    testnet: {
        wif: '80',
        pubKeyHash: '00'
    }
};
